import { Injectable } from '@nestjs/common';
import { Todo } from './model/todo.model';

@Injectable()
export class TodosService {
  private idCounter: number = 0;
  private todos: Todo[] = [];

  getAll(): Todo[] {
    return this.todos;
  }

  getById(id: number): Todo {
    for (const todo of this.todos) {
      if (todo.id === id)   return todo;
    }
    return null;
  }

  add(todo: Todo): Todo {
    todo.setId(this.idCounter);
    this.idCounter += 1;
    this.todos.push(todo);
    return todo;
  }

  deleteAll() {
    this.todos = [];
  }

  deleteById(id: number) {
    const todoToBeDeleted = this.getById(id);
    this.todos = this.todos.filter((todo) => todo !== todoToBeDeleted);
  }

  updateById(id: number, title: string, completed: boolean, order: number): Todo {
    const todo: Todo = this.getById(id);
    if (title)  todo.title = title;
    if (completed)  todo.completed = completed;
    if (order)  todo.order = order;
    return todo;
  }
}
