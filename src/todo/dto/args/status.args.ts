import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';

@ArgsType()
export class StatusArgs {
  @Field(() => String, { nullable: true })
  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
