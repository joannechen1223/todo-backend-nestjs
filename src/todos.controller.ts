import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Req,
  Param,
} from '@nestjs/common';
import { Request } from 'express';
import { TodosService } from './todos.service';
import { Todo } from './model/todo.model';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos(): any[] {
    return this.todosService.getAll();
  }

  @Get(':id')
  getOneTodo(@Param('id') id: number): Todo {
    return this.todosService.getById(id);
  }

  @Post()
  addTodo(@Req() request: Request): Todo {
    return this.todosService.add(new Todo(request.body.title));
  }

  @Delete()
  deleteTodos() {
    return this.todosService.deleteAll();
  }

  @Patch(':id')
  modifyOneTodo(@Param('id') id: number, @Req() request: Request): Todo {
    return this.todosService.updateById(
      id,
      request.body.title,
      request.body.completed
    );
  }
}
