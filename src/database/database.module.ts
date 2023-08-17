import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './mongoose-config.service';

@Module({
  imports: [
    // @example 1: Local or Remote Instance URL
    // MongooseModule.forRoot("mongodb://localhost:27017/nest_app_db"),

    // @example 2 : Custom Mongoose Config Service
    MongooseModule.forRootAsync({
      // imports: [ConfigModule], // no need to import if `ConfigModule` is global true
      useClass: MongooseConfigService,
    }),
  ],

  // exports: [MongooseModule],
})
export class DatabaseModule {}
