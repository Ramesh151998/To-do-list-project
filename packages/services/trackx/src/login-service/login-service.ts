import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonResponse } from '@trackx/backend-utils';
import { Repository } from 'typeorm';
import { User } from './login-entity';
import { PermissionEntity } from './todo.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly LoginRepository: Repository<User>,
    @InjectRepository(PermissionEntity) private readonly permissionRepository: Repository<PermissionEntity>
  ) {}


  async createUser(userdata: any) {
    console.log(userdata, 'serviceeeeeeeeeeeeeeeeee');
    const existingUser = await this.LoginRepository.findOneBy({ username: userdata.username });
    if (existingUser) {
      return false;
    } else {
      const user = await this.LoginRepository.save({
        username: userdata.username,
        password: userdata.password
      });

      const todos = userdata.todos.map(permission => {
        return this.permissionRepository.create({
          permission,
          user
        });
      });

      await this.permissionRepository.save(todos);

      return true;
    }
  }




  async findUser(user: any): Promise<CommonResponse> {
    if (!user || !user.username) {
      console.error("Invalid User Data:", user);
      return new CommonResponse(false, 9858, "Invalid User Data");
    }

    try {
      const data = await this.LoginRepository.findOne({ relations: ['todos'], where: { username: user.username } });
      if (data) {
        console.log("User found:", data);
        return new CommonResponse(true, 654968, "Login Successfully", data);
      } else {
        console.warn("User not found for username:", user.username);
        return new CommonResponse(false, 9859, "Login Failed");
      }
    } catch (error) {
      console.error("Error during findUser:", error);
      return new CommonResponse(false, 9860, `Error: ${error.message}`);
    }
  }




}
