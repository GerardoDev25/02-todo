import { Query, Resolver } from '@nestjs/graphql';

import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], { name: 'todos' })
  finsAll(): Todo[] {
    return this.todoService.findAll();
  }

  findOne() {}

  createTodo() {}

  updateTodo() {}
}
