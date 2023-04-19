import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'todo quick agregation' })
export class AgregationType {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  pending: number;

  @Field(() => Int)
  completed: number;
}
