import { Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {
  @Query(() => String, {
    description: 'hola mundo es lo que retorna',
    name: 'hello',
  })
  helloWorld(): string {
    return 'hola mundo';
  }

  @Query(() => Float, { name: 'ramdomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, { name: 'ramdomNumberFromZero' })
  getRandomFromZero(): number {
    return Math.floor(Math.random() * 10);
  }
}
