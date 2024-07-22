import { ClassSerializerInterceptor, Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { HttpExceptionFilter } from '@trackx/backend-utils';
import * as bodyParser from 'body-parser';
import { WinstonModule, utilities as nestWinstonModuleUtilities } from 'nest-winston';
import winston from 'winston';
import { AppModule } from './app/app.module';
import { createDocument } from './swagger/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.enableCors({ credentials: true, origin: true });

  const reflector = app.get(Reflector);
  const configService = app.get(ConfigService);
  app.use(bodyParser.urlencoded({ limit: configService.get('maxPayloadSize'), extended: true }));
  app.use(bodyParser.json({ limit: configService.get('maxPayloadSize') }));
  app.useGlobalPipes(new ValidationPipe({ validationError: { target: false }, transform: true, forbidUnknownValues: false }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
  app.useGlobalFilters(new HttpExceptionFilter());

  // if (configService.get('env') === 'development') {
  createDocument(app);
  // }

  const server = await app.listen(5004);
  server.setTimeout(1000 * configService.get('responseTimeOut'));
  Logger.log(`🚀 TrackX Service - http://localhost:5004`);
}

bootstrap();