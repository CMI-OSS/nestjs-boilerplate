import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as requestIp from 'request-ip';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Client IP 파싱을 위한 미들웨어 설정
  app.use(requestIp.mw());

  // Swagger 설정
  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API Document')
    .setVersion('0.1')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  const config = app.get<ConfigService>(ConfigService);
  await app.listen(config.get('SERVICE_PORT'));
}
bootstrap();
