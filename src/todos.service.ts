import { Injectable } from '@nestjs/common';
import { Todo } from './model/todo.model'

@Injectable()
export class TodosService {
  private idCounter = 0
  private todos: Todo[] = [];

  getAll(): any[] {
    return this.todos;
  }

  getById(id: number): Todo {
    for (let todo of this.todos) {
      if (todo.id == id) {
        return todo
      }
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

  updateById(id: number, title: string, completed: boolean): Todo {
    let ret: Todo = null;
    for (let todo of this.todos) {
      if (todo.id == id) {
        ret = todo;
        break;
      }
    }
    if (title) {
      ret.title = title;
    }
    if (completed) {
      ret.completed = completed;
    }
    return ret;
  }
}