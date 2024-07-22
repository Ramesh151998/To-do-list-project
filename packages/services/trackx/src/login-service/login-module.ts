import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from '../todolist/todo.entity';
import { LoginController } from './login-controller';
import { PermissionEntity } from './todo.entity';
import { User } from './login-entity';
import { UserService } from './login-service';

@Module({imports: [
    TypeOrmModule.forFeature([User,PermissionEntity,TodoEntity]),
      ],
      controllers:[LoginController],
      providers:[UserService],
    })
export class LoginModule {}
