import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { DataSource, Repository } from "typeorm"
import { TodoEntity } from "./todo.entity"
import { ToDoDto } from "./todo.dto"
import { CommonResponse } from "packages/libs/shared-models/src/common/common-response"


@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoEntity)

        private repo: Repository<TodoEntity>,
        private readonly dataSource: DataSource,

    ) { }

    async createTodo(req: ToDoDto): Promise<CommonResponse> {
        try {
            const existingTodo = await this.repo.findOne({ where: { task: req.task, description: req.description } });
            if (existingTodo) {
                return new CommonResponse(false, 0, 'To do Name already exists');
            }
    
            let entity: TodoEntity;
    
            if (req.id) {
                entity = await this.repo.findOne({ where: { id: req.id } });
                if (!entity) {
                    return new CommonResponse(false, 0, 'To do not found');
                }
                entity.updatedUser = req.createdUser;
            } else {
                entity = new TodoEntity();
                entity.createdUser = req.createdUser;
            }
    
            entity.task = req.task;
            entity.description = req.description;
    
            const save = await this.repo.save(entity);
            if (!save) {
                return new CommonResponse(false, 0, 'Something went wrong in to do creation', []);
            }
    
            return new CommonResponse(true, 1, 'Created successfully', save);
        } catch (err) {
            throw err;
        }
    }
    


    async gettodo(): Promise<CommonResponse> {
        const data = await this.repo.find()
        return  new CommonResponse(true,21651,"Data Retrieved Succewssfully",data)
    }

    async activateOrDeactivateTodo(req: ToDoDto): Promise<CommonResponse> {
        try {
            const Exists = await this.repo.findOne({ where: { id: req.id } });
            if (Exists) {
                if (!Exists) {
                    throw new CommonResponse (false,10113, 'Someone updated the current Todo information.Refresh and try again');
                } else {

                    const update = await this.repo.update(
                        { id: req.id },
                        { isActive: req.isActive, updatedUser: req.updatedUser });
                    if (Exists.isActive) {
                        if (update.affected) {
                            const Response: CommonResponse = new CommonResponse(true, 10115, 'Todo is Deactivated successfully');
                            return Response;
                        } else {
                            throw new CommonResponse(false, 10111, 'Todo is already deactivated');
                        }
                    } else {
                        if (update.affected) {
                            const Response: CommonResponse = new CommonResponse(true, 10114, 'Todo is activated successfully');
                            return Response;
                        } else {
                            throw new CommonResponse(false, 10112, 'Todo is already  activated');
                        }
                    }

                }
            } else {
                throw new CommonResponse(false, 99998, 'No Records Found');
            }
        } catch (err) {
            return err;
        }
    }




}