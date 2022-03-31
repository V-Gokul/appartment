import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

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
  pollExpiry: Date;

  @Field(() => Int)
  @IsOptional()
  minOptions: number;

  @Field(() => Int)
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
}

@InputType()
export class CreatePollSelectionInput {
  @Field(() => Int)
  @IsNotEmpty()
  profile_id: number;

  @Field(() => Int)
  @IsNotEmpty()
  poll_id: number;

  @Field(() => [Int])
  @IsNotEmpty()
  option_id: [number];

  // @Field(() => Int)
  // @IsNotEmpty()
  // option_id: number;
}
