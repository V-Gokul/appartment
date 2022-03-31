import { CreatePollInput } from './create-poll.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdatePollInput extends PartialType(CreatePollInput) {
  @Field(() => [UpdateOptionInput])
  option: UpdateOptionInput[];
}
@InputType()
export class UpdateOptionInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  text: string;
}
