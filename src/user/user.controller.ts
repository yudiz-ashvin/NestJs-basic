import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Ip,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserData } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private user: UserService) {}
  @Get('/profile')
  // @HttpCode(200)
  @HttpCode(HttpStatus.OK)
  getProfile() {
    return this.user.userProfile();
  }

  @Post('/auth')
  registerUser(@Body() dto: UserData, @Ip() ip: string) {
    console.log(ip);
    return this.user.createUser(dto);
  }
}
