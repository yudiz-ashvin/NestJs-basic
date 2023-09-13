import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AdminDto } from './dto/admin.dto';
import { AdminService } from './admin.service';
import { AuthGuard } from '@app/user/guards/auth/auth.guard';

@Controller('admin')
export class AdminController {
  constructor(private admin: AdminService) {}
  @Get()
  @HttpCode(200)
  getAdmin() {
    return this.admin;
  }

  @Post('login')
  @HttpCode(200)
  getLogin(@Body() adminDto: AdminDto) {
    return this.admin.adminLogin(adminDto);
  }

  @Get('AllUser')
  @UseGuards(AuthGuard)
  getAllUser() {
    return this.admin.allUSer();
  }
}
