export class Todo {
  id: number;
  title: string;
  completed: boolean;
  order: number;
  url: string;

  constructor(title: string, order?: number) {
    this.title = title;
    this.completed = false;
    this.order = order | 0;
  }

  setId(id: number) {
    this.id = id;
    this.url = 'https://todo-backend-nestjs.herokuapp.com/todos/' + id;
  }
}
