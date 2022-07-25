import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private configService: ConfigService,
  ) {}

  async signup(body: AuthDto) {
    // hash the password of the user
    const hash = await argon.hash(body.password);

    // save the new user in database
    try {
      const user = await this.prisma.user.create({
        data: {
          email: body.email,
          password: hash,
          firstName: body.firstName ?? '',
          lastName: body.lastName ?? '',
        },
      });

      // return newly created user
      return this.signToken(user.id, user.email);
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new ForbiddenException('Email already exists.');
        }
      }
      throw err;
    }
  }

  async signin(body: AuthDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('User does not exists');
    }

    const pwMatches = await argon.verify(user.password, body.password);

    if (!pwMatches) {
      throw new ForbiddenException('Invalid Credentials.');
    }

    return this.signToken(user.id, user.email);
  }

  async signToken(userId: number, email: string): Promise<object> {
    const payload = {
      sub: userId,
      email,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1d',
      secret: this.configService.get('JWT_SECRET'),
    });

    return {
      access_token: token,
    };
  }
}
