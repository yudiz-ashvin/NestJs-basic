import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [UserModule, AdminModule],
})
export class AppModule {}
