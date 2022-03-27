import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { profile } from 'src/profiles/profile.model';

@ObjectType()
export class Polls {
  @Field(() => Int)
  id: number;

  @Field()
  description: string;

  @Field()
  questionType: string;

  @Field()
  postedAt: string;

  @Field()
  pollExpiry: string;

  @Field()
  minOptions: number;

  @Field()
  maxOptions: number;

  @Field(() => [CreateOptionInput], { nullable: true })
  option: CreateOptionInput[];
}

@InputType()
export class CreateOptionInput {
  @Field(() => Int)
  id: number;

  @Field()
  text: string;

  @Field(() => [CreatePollSelection], { nullable: true })
  pollSelection: CreateOptionInput[];
}

@InputType()
export class CreatePollSelection {
  @Field(() => Int)
  id: number;

  @Field(() => profile)
  profileId: profile;
}
