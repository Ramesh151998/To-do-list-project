// import { Controller } from '@nestjs/common';

// @Controller('login')
// export class LoginController {}

import { Body, Controller, Post, Patch } from '@nestjs/common';
import { UserService } from './login-service';
import { CommonResponse, returnException } from '@trackx/backend-utils';


interface Dto {
    username: string;
    password: string;

}

@Controller('auth')
export class LoginController {
    constructor(
        private readonly authService: UserService
    ) { }

    @Post('createUser')
    createUser(@Body() userdata: Dto) {
        return this.authService.createUser(userdata)
    }

    @Post('findUser')
    async findUser(@Body() user: any): Promise<CommonResponse> {
        try {
         return  await this.authService.findUser(user)
        } catch (error) {
            return returnException(CommonResponse, error)
        }

    }

   

}