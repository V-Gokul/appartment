import { CreateOptionInput, CreatePollInput } from './create-poll.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Option, PollSelection } from '../poll.model';
import { profile } from 'src/profiles/profile.model';

@InputType()
export class UpdatePollInput extends PartialType(CreatePollInput) {
  // @Field(() => Int)
  // id: number;
  @Field(() => [UpdateOptionInput], { nullable: true })
  options: UpdateOptionInput[];

  @Field(() => [createPollSelectionInput], { nullable: true })
  selection: createPollSelectionInput[];
}
@InputType()
export class UpdateOptionInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  text?: string;

  // @Field(() => [UpdatePollSelectionInput], { nullable: true })
  // selection: UpdatePollSelectionInput[];
}

@InputType()
export class createPollSelectionInput {
  @Field(() => Int)
  id: number;

  @Field(() => profile)
  profileId: profile;
}
