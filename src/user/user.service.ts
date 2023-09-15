import {
  BadRequestException,
  HttpCode,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { catchError } from 'rxjs';
import { UserData } from './dto';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}
  @HttpCode(HttpStatus.BAD_REQUEST)
  userProfile(id: ObjectId) {
    // return
    const user = this.UserModel.findOne({ _id: id });

    return new Promise((resolve) => {
      setTimeout(() => resolve(user), 7000);
    });
    // return user;
  }

  async createUser(data: UserData): Promise<User> {
    // try {
    const createdUser = new this.UserModel(data);
    // return new Promise((resolve) => {
    //   setTimeout(() => resolve(createdUser.save()), 7000);
    // });
    return createdUser.save();
    // } catch (error) {
    //   throw new BadRequestException('Something wrong', {
    //     cause: new Error(),
    //     description: 'Add user Error',
    //   });
    // }
  }

  async getAllUser() {
    const allUser = await this.UserModel.find();
    return allUser;
  }
}
