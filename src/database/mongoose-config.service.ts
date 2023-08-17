import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private config: ConfigService) {}

  createMongooseOptions():
    | MongooseModuleOptions
    | Promise<MongooseModuleOptions> {
    const db = this.config.get('DB_URL');
    const isLocal = this.config.get('NODE_ENV') === 'Local';

    const uri = isLocal ? 'mongodb://localhost:27017/nest_app_db' : db;

    return {
      uri,
      // NOTE: we can other options as well, below are the some options you can set
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    };
  }
}
