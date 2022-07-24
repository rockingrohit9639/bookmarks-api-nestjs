import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: AuthDto) {
    return this.authService.signup(body);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() body: AuthDto) {
    return this.authService.signin(body);
  }
}
