import { Module } from '@nestjs/common';
import { HelloworldResolver } from './hello-world.resolver';

@Module({ providers: [HelloworldResolver] })
export class HellowordModule {}
