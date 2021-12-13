import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import * as Joi from 'joi';
import { DatabaseModule } from '@/database/database.modules';
import { HttpExceptionFilter } from '@/common/filters/http-exception.filter';
import { HttpResponseInterceptor } from '@/common/interceptors/http-response.interceptor';
import { AppController } from '@/src/app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local',
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().port().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        MONGO_HOST: Joi.string().required(),
        MONGO_PORT: Joi.number().required(),
        MONGO_USERNAME: Joi.string().required(),
        MONGO_PASSWORD: Joi.string().required(),
        MONGO_DATABASE: Joi.string().required(),
        API_PORT: Joi.number().required(),
      }),
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpResponseInterceptor,
    },
  ],
})
export class AppModule {}
