import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosData } from './entities/todos.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TodosData])
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
