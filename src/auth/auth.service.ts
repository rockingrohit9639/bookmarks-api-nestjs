import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(body: AuthDto) {
    // hash the password of the user
    const hash = await argon.hash(body.password);

    // save the new user in database
    try {
      const user = await this.prisma.user.create({
        data: {
          email: body.email,
          password: hash,
        },
      });

      delete user.password;

      // return newly created user
      return user;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new ForbiddenException('Email already exists.');
        }
      }
      throw err;
    }
  }
  signin() {
    return 'signin';
  }
}
