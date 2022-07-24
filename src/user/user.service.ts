import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async updateUserInfo(body: UserDto, userId: number) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: { ...body },
    });

    delete user.password;

    return user;
  }
}
