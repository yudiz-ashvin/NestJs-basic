import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Ip,
  Optional,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ObjectId } from 'mongoose';
import { ObjectUnsubscribedError } from 'rxjs';
import { UserData } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private user: UserService) {
    // @Inject('User')
    // @Optional()
    // console.log('object', user);
  }

  @Get('/profile/:id')
  // @HttpCode(200)
  @HttpCode(HttpStatus.OK)
  getProfile(@Param('id') id: string) {
    return this.user.userProfile(id);
  }

  @Post('/auth')
  registerUser(@Body() dto: UserData, @Ip() ip: string) {
    console.log(ip);
    return this.user.createUser(dto);
  }
}
