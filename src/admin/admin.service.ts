import { User } from '@app/user/user.schema';
import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  allUSer() {
    const user = this.UserModel.find();
    return user;
    // return 'user';
  }

  adminLogin(adminDto: AdminDto) {
    return {
      message: `${adminDto.sUserName} login Successfully`,
      code: 200,
    };
  }
}
