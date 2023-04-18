import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, description: 'Piedra del alma', done: false },
    { id: 2, description: 'Piedra del tiempo', done: false },
    { id: 3, description: 'Piedra del espacio', done: true },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id == id);

    if (!todo) {
      throw new NotFoundException(`Todo with id: "${id}" not found`);
    }
    return todo
  }

  createTodo(description: string): Todo {
    const newTodo: Todo = {
      description,
      done: false,
      id: this.todos.length + 1,
    };

    this.todos.push(newTodo);
    return newTodo;
  }
}
