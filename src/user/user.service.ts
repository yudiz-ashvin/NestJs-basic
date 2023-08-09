import { Injectable } from '@nestjs/common';
import { UserData } from './dto';

@Injectable()
export class UserService {
  userProfile() {
    return {
      message: 'user get successfully',
      code: 200,
    };
  }

  createUser(data: UserData) {
    return data;
  }
}
