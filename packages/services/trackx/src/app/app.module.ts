import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '../__common__/logging.interceptor';
import { DatabaseModule } from '../database';
import { LoginModule } from '../login-service/login-module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from '../todolist/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
      load: [],
    }),
    DatabaseModule,
    LoginModule,
    TodoModule
  ],
  controllers: [AppController],
  providers: [ AppService],
})
export class AppModule { }
