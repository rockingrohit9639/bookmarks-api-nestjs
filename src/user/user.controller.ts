import { Controller, Get, Put, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/decorator';
import { JwtGuard } from 'src/guard';

@Controller('users')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('profile')
  getMe(@GetUser() user: User): User {
    return user;
  }

  // @Put()
}
