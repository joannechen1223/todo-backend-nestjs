import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './model/todo.model';

@Controller()
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
  addTodo(@Body('title') title: string, @Body('order') order: number): Todo {
    return this.todosService.add(new Todo(title, order));
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
  modifyOneTodo(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('completed') completed: boolean,
    @Body('order') order: number
  ): Todo {
    return this.todosService.updateById(Number(id), title, completed, order);
  }
}
