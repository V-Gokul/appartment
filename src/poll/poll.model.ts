import { Field, InputType, Int, ObjectType, OmitType } from '@nestjs/graphql';
import { profile } from 'src/profiles/profile.model';

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

  @Field(() => [Option], { nullable: true })
  option: Option[];
}

@ObjectType()
export class Option {
  @Field(() => Int)
  id: number;

  @Field()
  text: string;

  @Field(() => [PollSelection], { nullable: true })
  pollSelection: Option[];
}

@ObjectType()
export class PollSelection {
  @Field(() => Int)
  id: number;

  @Field(() => profile)
  profileId: profile;
}

// @ObjectType()
// export class DeletePoll extends OmitType(Polls, ['option']) {}
