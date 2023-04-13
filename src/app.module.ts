import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { HellowordModule } from './helloword/hello-world.module';
import { HelloworldResolver } from './helloword/hello-world.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // playground: false,
    }),
    HellowordModule,
  ],
  controllers: [],
  providers: [HelloworldResolver],
})
export class AppModule {}
