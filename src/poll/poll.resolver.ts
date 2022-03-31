import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PollService } from './poll.service';

import {
  CreatePollInput,
  CreatePollSelectionInput,
} from './dto/create-poll.input';
import {
  // createPollSelectionInput,
  UpdatePollInput,
} from './dto/update-poll.input';
import { Option, Polls, PollSelection } from './poll.model';
import { identity } from 'rxjs';

@Resolver(() => Polls)
export class PollResolver {
  constructor(private readonly pollService: PollService) {}

  @Mutation(() => Polls)
  createPoll(@Args('createPollInput') createPollInput: CreatePollInput) {
    return this.pollService.create(createPollInput);
  }

  @Query(() => [Polls], { name: 'polls' })
  findAll() {
    return this.pollService.findAll();
  }

  @Query(() => Polls, { name: 'poll' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pollService.findOne(id);
  }

  @Mutation(() => Polls)
  removePoll(@Args('id', { type: () => Int }) id: number) {
    return this.pollService.removePoll(id);
  }
  @ResolveField(() => Option)
  async option(@Parent() poll: Polls) {
    return this.pollService.getOption(poll);
  }

  @Mutation(() => PollSelection)
  pollselection(
    @Args('data') createPollSelectionInput: CreatePollSelectionInput,
  ) {
    return this.pollService.createPollSelection(createPollSelectionInput);
  }

  @Mutation(() => PollSelection)
  async selection(@Parent() poll: Polls) {
    return this.pollService.getSelection(poll);
  }
}
