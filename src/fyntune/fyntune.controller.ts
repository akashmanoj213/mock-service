import { Controller, Post, Body } from '@nestjs/common';
import { FyntuneService } from './fyntune.service';
import { LoginFyntuneUserDto } from './dto/login-fyntune-user.dto';
import { SignupFyntuneUserDto } from './dto/signup-fyntune-user.dto';

@Controller('fyntune')
export class FyntuneController {
  constructor(private readonly fyntuneService: FyntuneService) {}

  @Post('users/signup')
  async signUpUser(@Body() signupUserDto: SignupFyntuneUserDto): Promise<any> {
    return this.fyntuneService.signUpUser(signupUserDto);
  }

  @Post('users/login')
  async createUser(@Body() loginUserDto: LoginFyntuneUserDto): Promise<any> {
    return this.fyntuneService.loginUser(loginUserDto);
  }
}
