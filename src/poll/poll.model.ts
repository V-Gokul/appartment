import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Polls {
  @Field(() => Int)
  id: number;

  @Field()
  pollName: string;

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

  @Field(() => [Option])
  option: Option[];
}

@ObjectType()
export class Option {
  @Field(() => Int)
  id: number;

  @Field()
  text: string;
}

@ObjectType()
export class PollSelection {
  @Field(() => Int)
  id: number;

  // @Field(() => profile)
  // profileId: profile;
}
