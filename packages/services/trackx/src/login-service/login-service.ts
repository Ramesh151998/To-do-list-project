import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './login-entity';
import { TodoEntity } from '../todolist/todo.entity';
import { CommonResponse } from '@trackx/backend-utils';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private LoginRepository: Repository<User>,
  ) { }

  async createUser(userdata: any) {
    console.log(userdata, 'serviceeeeeeeeeeeeeeeeee')
    const data = await this.LoginRepository.findOneBy({ username: userdata.username })
    if (data) {
      return false
    }
    else {
      return this.LoginRepository.save({
        username: userdata.username,
        password: userdata.password
      })
    }

  }

  async findUser(user: any): Promise<CommonResponse> {
    const data = await this.LoginRepository.findOne({ relations: ['todos'], where: { username: user.username } })
    if (data) {
      return new CommonResponse(true, 654968, "Login Successfully",data)
    } else {
      return new CommonResponse(false, 9859, "Login Failed")

    }

  }

  

}
