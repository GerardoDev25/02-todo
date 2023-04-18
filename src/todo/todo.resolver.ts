import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], { name: 'todos' })
  finsAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { nullable: true, type: () => Int }) id: number): Todo {
    return this.todoService.findOne(id);
  }

  createTodo() {}

  updateTodo() {}
}
