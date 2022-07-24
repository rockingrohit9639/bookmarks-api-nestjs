import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/decorator';
import { JwtGuard } from 'src/guard';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseGuards(JwtGuard)
  @Get('profile')
  getMe(@GetUser() user: UserDto): UserDto {
    return user;
  }

  @UseGuards(JwtGuard)
  @Put('update')
  updateUserInfo(@Body() body: UserDto, @GetUser('id') userId: number) {
    return this.userService.updateUserInfo(body, userId);
  }
}
