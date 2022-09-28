import { EditTodo } from './dto/edit.todo';
import { CreateTodo } from './dto/create.todo';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(
        private readonly todoService: TodoService
    ){}

    @Get()
    async findAll(){
        const todos = await this.todoService.findAll()
        return {
            messagge:'Response',
            todos
        }
    }

    @Get(':id')
    async findOne(
        @Param('id', ParseIntPipe) id: number
    ){
        const todo = await this.todoService.findOne(id);
        return todo
    }

    @Post()
    async createTodo(
        @Body() dto: CreateTodo
    ){
        const todo = await this.todoService.createTodo(dto)
        return {
            messagge:'Todo add',
            todo
        }
    }

    @Put(':id')
    async editTodo(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: EditTodo
    ){
        return await this.todoService.editTodo(id,dto)
    }

    @Delete(':id')
    async deleteTodo(
        @Param('id', ParseIntPipe) id: number
    ){
        const todoRemove = await this.todoService.deleteTodo(id)
        return {
            message:'Delete todo',
            todoRemove
        }
    }
}
