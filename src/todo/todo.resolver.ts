import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { StatusArgs, CreateTodoInput, UpdateTodoInput } from './dto';
import { AgregationType as AggregationType } from './types/agregations.type';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], { name: 'todos' })
  finsAll(@Args() statusArgs: StatusArgs): Todo[] {
    return this.todoService.findAll(statusArgs);
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { nullable: true, type: () => Int }) id: number): Todo {
    return this.todoService.findOne(id);
  }

  @Query(() => Int, { name: 'totalTodos' })
  totalTodos(): number {
    return this.todoService.totalTodos;
  }

  @Query(() => Int, { name: 'completedTodos' })
  completedTodos(): number {
    return this.todoService.completedTodos;
  }

  @Query(() => Int, { name: 'pendingTodos' })
  pendingTodos(): number {
    return this.todoService.pendingTodos;
  }

  @Query(() => AggregationType, { name: 'aggregationType' })
  aggregations(): AggregationType {
    return {
      completed: this.todoService.completedTodos,
      pending: this.todoService.pendingTodos,
      total: this.todoService.totalTodos,
    };
  }

  @Mutation(() => Todo, { name: 'createTodo' })
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput): Todo {
    return this.todoService.create(createTodoInput);
  }

  @Mutation(() => Todo, { name: 'updateTodo' })
  updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput): Todo {
    return this.todoService.update(updateTodoInput);
  }

  @Mutation(() => Boolean, { name: 'deleteTodo' })
  removeTodo(@Args('id', { type: () => Int }) id: number): Boolean {
    return this.todoService.remove(id);
  }
}
