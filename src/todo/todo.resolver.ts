import { Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';

@Resolver()
export class TodoResolver {
  @Query(() => [Todo], { name: 'todos' })
  finsAll(): Todo[] {
    return [];
  }

  findOne() {}

  createTodo() {}

  updateTodo() {}
}
