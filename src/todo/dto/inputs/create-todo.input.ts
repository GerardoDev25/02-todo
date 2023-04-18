import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field(() => String, { description: 'what need to be done' })
  description: string;
}
