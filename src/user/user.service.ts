import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { UserData } from './dto';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}
  @HttpCode(HttpStatus.BAD_REQUEST)
  userProfile(id: ObjectId) {
    const user = this.UserModel.findOne({ _id: id });
    return user;
  }

  async createUser(data: UserData): Promise<User> {
    const createdUser = new this.UserModel(data);
    return createdUser.save();
  }

  async getAllUser() {
    const allUser = await this.UserModel.find();
    return allUser;
  }
}
