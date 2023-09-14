import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Ip,
  Optional,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { HTTP_CODE_METADATA } from '@nestjs/common/constants';
import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';
import { ObjectUnsubscribedError, retry } from 'rxjs';
import { UserData } from './dto/user.dto';
import { ParseObjectIdPipe } from './pipes/validateuserdata/validateuserdata.pipe';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private user: UserService) {
    // @Inject('User')
    // @Optional()
    // console.log('object', user);
  }

  @Get('/profile/:id')
  // @HttpCode(200)
  // @UseGuards(userAuth)
  // @HttpCode(404)
  getProfile(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.user.userProfile(id);
  }

  @Get('auth')
  @HttpCode(HttpStatus.OK)
  checkAuth(@Req() req: Request, @Res() res: Response) {
    // throw new BadRequestException('invalide user');
    return res.json({
      message: 'success',
      ua: req['ua'],
    });
  }

  @Post('/auth')
  registerUser(@Body() dto: UserData, @Ip() ip: string) {
    console.log(ip);
    return this.user.createUser(dto);
  }

  @Get('allUser')
  allUSer() {
    return this.user.getAllUser();
  }
}
