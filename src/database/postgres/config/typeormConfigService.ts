import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeormConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    const mysqlHost = this.configService.get<string>('MYSQL_HOST');
    const mysqlPort = this.configService.get<number>('MYSQL_PORT');
    const mysqlDatabase = this.configService.get<string>('MYSQL_DATABASE');
    const mysqlUsername = this.configService.get<string>('MYSQL_USERNAME');
    const mysqlPassword = this.configService.get<string>('MYSQL_PASSWORD');

    return {
      type: 'mysql',
      entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
      host: mysqlHost,
      port: mysqlPort,
      database: mysqlDatabase,
      username: mysqlUsername,
      password: mysqlPassword,
    };
  }
}
