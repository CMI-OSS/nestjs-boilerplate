import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

/**
 * MongoDb Connection Configuration variable를 만들어주는 service
 */
@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createMongooseOptions(): MongooseModuleOptions {
    /**
     * Mongodb Connection Configuration을 불러온다.
     */
    const mongoHost = this.configService.get<string>('MONGO_HOST');
    const mongoPort = this.configService.get<string>('MONGO_PORT');
    const mongoDatabase = this.configService.get<string>('MONGO_DATABASE');
    const mongoUsername = this.configService.get<string>('MONGO_USERNAME');
    const mongoPassword = this.configService.get<string>('MONGO_PASSWORD');

    return {
      uri: 'mongodb://' + mongoHost + '/' + mongoDatabase,
      user: mongoUsername,
      pass: mongoPassword,

    };
  }
}
