import { Controller, Get, Post, Delete, Req } from '@nestjs/common';
import { Request } from 'express';
import { TodosService } from './todos.service';
import { Todo } from './model/todo.model'

let idCounter = 1

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    getTodos(): any[] {
        return this.todosService.getAll();
    }

    @Post()
    addTodo(@Req() request: Request): Todo {
        let todo: Todo = new Todo(request.body.title);
        return this.todosService.add(new Todo(request.body.title));
    }

    @Delete()
    deleteTodo() {
        return this.todosService.deleteAll();
    }
}