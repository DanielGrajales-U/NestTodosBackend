import { CreateTodo } from './dto/create.todo';
import { TodosData } from './entities/todos.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EditTodo } from './dto/edit.todo';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodosData)
        private readonly todoRepository: Repository<TodosData>,
    ){}


    async findAll(){
        return await this.todoRepository.find()
    }

    async findOne(id: number){
        const todo = await this.todoRepository.findOneBy({id: id})
        if(!todo) throw new NotFoundException("todo doesn't exist");
        return todo
    }

    async createTodo(dto: CreateTodo){
        const newTodo =  this.todoRepository.create(dto)
        return await this.todoRepository.save(newTodo)
    }

    async editTodo( id: number, dto: EditTodo ){
        const todo = await  this.findOne(id);
        const editedTodo = Object.assign(todo, dto)
        return await this.todoRepository.save(editedTodo) 
    }

    async deleteTodo(id: number){
        const todoRemove = await this.findOne(id)
        return await this.todoRepository.remove(todoRemove)
    }
}
