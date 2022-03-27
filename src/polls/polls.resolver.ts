// import {
//   Resolver,
//   Query,
//   Mutation,
//   Args,
//   Int,
//   ResolveField,
//   Parent,
// } from '@nestjs/graphql';
// import { PollsService } from './polls.service';
// // import { Poll } from './entities/poll.entity';
// import { CreatePollInput } from './dto/create-poll.input';
// import { UpdatePollInput } from './dto/update-poll.input';
// import { Polls } from './poll.model';

// @Resolver(() => Polls)
// export class PollsResolver {
//   constructor(private readonly pollsService: PollsService) {}

//   @Mutation(() => Polls)
//   createPoll(@Args('data') createPollInput: CreatePollInput) {
//     return this.pollsService.create(createPollInput);
//   }

//   @Query(() => [Polls], { name: 'polls' })
//   findAll() {
//     return this.pollsService.findAll();
//   }

//   @Query(() => Polls, { name: 'poll' })
//   findOne(@Args('id', { type: () => Int }) id: number) {
//     return this.pollsService.findOne(id);
//   }

//   // @Mutation(() => Polls)
//   // updatePoll(@Args('updatePollInput') updatePollInput: UpdatePollInput) {
//   //   return this.pollsService.update(updatePollInput.id, updatePollInput);
//   // }

//   @Mutation(() => Polls)
//   removePoll(@Args('id', { type: () => Int }) id: number) {
//     return this.pollsService.remove(id);
//   }

//   @ResolveField(() => Polls)
//   async choices(@Parent() poll: Polls) {
//     const choices = await this.pollsService.getChoice(poll);
//     console.log(choices, 'choices');
//     return choices;
//   }
// }
