import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from '../strategies';
import 'dotenv/config';
import { ConfigService } from '@nestjs/config';

export const typeOrmConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'ramesh', 
  timezone: 'Z',
  migrations: ['dist/database/migrations/*.js*{.ts,.js}'],
}

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
    return {
      ...typeOrmConfig,
      synchronize: false,
      logging: true,
      subscribers: [],
      //namingStrategy: new SnakeNamingStrategy(),
      //logger: new QueryLogger(new PinoLogger({ pinoHttp: { level: configService.get().logLevel } })),
      autoLoadEntities: true
    }
  },
};

