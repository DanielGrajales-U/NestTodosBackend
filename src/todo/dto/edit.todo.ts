import { CreateTodo } from './create.todo';
import { PartialType } from '@nestjs/swagger'


export class EditTodo extends PartialType(CreateTodo){

}