import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AdminDto } from './dto/admin.dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private admin: AdminService) {}
  @Get()
  @HttpCode(200)
  getAdmin() {
    return {
      message: 'Admin',
    };
  }

  @Post('login')
  @HttpCode(200)
  getLogin(@Body() adminDto: AdminDto) {
    return this.admin.adminLogin(adminDto);
  }
}
