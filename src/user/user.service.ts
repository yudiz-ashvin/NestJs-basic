import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserData } from './dto';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}
  userProfile(id: string) {
    const user = this.UserModel.findById(id);
    return user;
  }

  async createUser(data: UserData): Promise<User> {
    const createdUser = new this.UserModel(data);
    return createdUser.save();
  }

  getUser() {}
}
