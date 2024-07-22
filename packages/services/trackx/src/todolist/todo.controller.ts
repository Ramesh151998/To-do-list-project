import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { TodoService } from "./todo.service";

import { ToDoDto } from "./todo.dto";
import { CommonResponse } from "packages/libs/shared-models/src/common/common-response";
import { returnException } from "@trackx/backend-utils";

@ApiTags('/todolist')
@Controller('todolist')
export class TodoController {
    constructor(private service: TodoService,
    ) { }

    @Post('/gettodo')
    async gettodo(): Promise<any> {
        return await this.service.gettodo();
    }
    

    @Post('/createTodo')
    @ApiBody({ type: ToDoDto })
    async createTodo(@Body() req: any): Promise<CommonResponse> {
        try {
            return await this.service.createTodo(req);
        } catch (error) {
            return returnException(CommonResponse, error);
        }

    }

    

    @Post('/activateOrDeactivateTodo')
    @ApiBody({ type: ToDoDto })
    async activateOrDeactivateTodo(@Body() dto: any, isUpdate: boolean = false): Promise<CommonResponse> {
        try {
            return await this.service.activateOrDeactivateTodo(dto);
        } catch (error) {
            return returnException(CommonResponse, error);
        }
    }

}