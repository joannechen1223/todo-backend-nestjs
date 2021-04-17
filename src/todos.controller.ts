import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
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
  getOneTodo(@Param('id') id: string): Todo {
    return this.todosService.getById(Number(id));
  }

  @Post()
  addTodo(@Body('title') title: string): Todo {
    return this.todosService.add(new Todo(title));
  }

  @Delete()
  deleteTodos() {
    this.todosService.deleteAll();
  }

  @Delete(':id')
  deleteOneTodo(@Param('id') id: string) {
    this.todosService.deleteById(Number(id));
  }

  @Patch(':id')
  modifyOneTodo(@Param('id') id: string, @Req() request: Request): Todo {
    return this.todosService.updateById(
      Number(id),
      request.body.title,
      request.body.completed
    );
  }
}
