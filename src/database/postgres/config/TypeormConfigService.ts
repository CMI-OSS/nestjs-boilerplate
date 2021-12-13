import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

/**
 * MongoDb Connection Configuration variable를 만들어주는 service
 */
@Injectable()
export class TypeormConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    const postgresHost = this.configService.get<string>('POSTGRES_HOST');
    const postgresPort = this.configService.get<number>('POSTGRES_PORT');
    const postgresDatabase = this.configService.get<string>('POSTGRES_DATABASE');
    const postgresUsername = this.configService.get<string>('POSTGRES_USERNAME');
    const postgresPassword = this.configService.get<string>('POSTGRES_PASSWORD');

    return {
      type: 'mysql',
      entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
      host: postgresHost,
      port: postgresPort,
      database: postgresDatabase,
      username: postgresUsername,
      password: postgresPassword,
    };
  }
}
