import { Int, Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { findBreakingChanges } from 'graphql';

@InputType()
export class CreatePollInput {
  @Field()
  @IsNotEmpty()
  pollName: string;

  @Field()
  @IsNotEmpty()
  description: string;

  @Field()
  @IsNotEmpty()
  questionType: string;

  @Field()
  @IsNotEmpty()
  postedAt: Date;

  @Field()
  @IsNotEmpty()
  pollExipry: Date;

  @Field()
  @IsOptional()
  minOptions: number;

  @Field()
  @IsOptional()
  maxOptions: number;

  @Field(() => [CreateOptionInput], { nullable: true })
  @IsNotEmpty()
  @IsOptional()
  option: CreateOptionInput[];
}

@InputType()
export class CreateOptionInput {
  @Field()
  @IsNotEmpty()
  text: string;

  // @Field(() => Int)
  // @IsNotEmpty()
  // profileId: number;
}
