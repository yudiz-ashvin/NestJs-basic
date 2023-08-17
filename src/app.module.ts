import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    // MongooseModule.forRoot(
    //   // 'mongodb+srv://Ashvin0740:mXMYwOz3Flx2bLnF@ashvincluster.m2mqs.mongodb.net/nest',
    //   process.env.DB_URL,
    // ),
    UserModule,
    AdminModule,
    // RouterModule.register([{ path: 'abcd', module: UserModule }]), // route module
  ],
})
export class AppModule {}
