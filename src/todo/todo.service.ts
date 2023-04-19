import { Injectable, NotFoundException } from '@nestjs/common';

import { Todo } from './entity/todo.entity';
import { StatusArgs, CreateTodoInput, UpdateTodoInput } from './dto';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, description: 'Piedra del alma', done: false },
    { id: 2, description: 'Piedra del tiempo', done: false },
    { id: 3, description: 'Piedra del espacio', done: true },
  ];

  findAll({ status }: StatusArgs): Todo[] {
    if (status !== undefined) {
      return this.todos.filter((todo) => todo.done === status);
    }

    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id == id);

    if (!todo) {
      throw new NotFoundException(`Todo with id: "${id}" not found`);
    }
    return todo;
  }

  create(createTodoInput: CreateTodoInput): Todo {
    const newTodo: Todo = {
      description: createTodoInput.description,
      done: false,
      id: Math.max(...this.todos.map((todo) => todo.id), 0) + 1,
    };

    this.todos.push(newTodo);
    return newTodo;
  }

  update({ id, description, done }: UpdateTodoInput): Todo {
    const todoToUpdate = this.findOne(id);

    if (description) todoToUpdate.description = description;
    if (done !== undefined) todoToUpdate.done = done;

    this.todos = this.todos.map((todo) =>
      todo.id === id ? todoToUpdate : todo,
    );

    return todoToUpdate;
  }

  remove(id: number): Boolean {
    this.findOne(id);

    this.todos = this.todos.filter((t) => t.id !== id);
    return true;
  }
}
