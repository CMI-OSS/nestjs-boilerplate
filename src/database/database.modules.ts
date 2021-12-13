import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from '@/database/mongodb/config/mongooseConfig.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfigService } from '@/database/postgres/config/TypeormConfigService';

/**
 * 데이터베이스 모듈
 */
@Module({
  imports: [
    MongooseModule.forRootAsync({ useClass: MongooseConfigService }),
    TypeOrmModule.forRootAsync({ useClass: TypeormConfigService }),
  ],
})
export class DatabaseModule {
  constructor() {}
}
