import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PollService } from './poll.service';

import { CreatePollInput } from './dto/create-poll.input';
import { UpdatePollInput } from './dto/update-poll.input';
import { Polls } from 'src/polls/poll.model';

@Resolver(() => Polls)
export class PollResolver {
  constructor(private readonly pollService: PollService) {}

  @Mutation(() => Polls)
  createPoll(@Args('createPollInput') createPollInput: CreatePollInput) {
    return this.pollService.create(createPollInput);
  }

  @Query(() => [Polls], { name: 'poll' })
  findAll() {
    return this.pollService.findAll();
  }

  @Query(() => Polls, { name: 'poll' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pollService.findOne(id);
  }

  @Mutation(() => Polls)
  updatePoll(@Args('updatePollInput') updatePollInput: UpdatePollInput) {
    return this.pollService.update(updatePollInput.id, updatePollInput);
  }

  @Mutation(() => Polls)
  removePoll(@Args('id', { type: () => Int }) id: number) {
    return this.pollService.remove(id);
  }
}
