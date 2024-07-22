import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";
import { TodoEntity } from './todo.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskRepository extends Repository<TodoEntity> {
    constructor(@InjectRepository(TodoEntity) private userRepository: Repository<TodoEntity>
    ) {
        super(userRepository.target, userRepository.manager, userRepository.queryRunner);
    }
}