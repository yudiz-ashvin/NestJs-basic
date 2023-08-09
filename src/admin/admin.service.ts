import { Body, Injectable } from '@nestjs/common';
import { AdminDto } from './dto/admin.dto';

@Injectable()
export class AdminService {
  adminLogin(adminDto: AdminDto) {
    return {
      message: `${adminDto.sUserName} login Successfully`,
      code: 200,
    };
  }
}
