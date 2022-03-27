// import { Injectable, NotFoundException } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { CreateChoiceInput, CreatePollInput } from './dto/create-poll.input';
// import { UpdatePollInput } from './dto/update-poll.input';
// import { Polls } from './poll.model';

// @Injectable()
// export class PollsService {
//   constructor(private prisma: PrismaService) {}
//   // async create(createPollInput: CreatePollInput) {
//   //   const data: Prisma.pollsCreateInput = {
//   //     pollName: createPollInput.pollName,
//   //     description: createPollInput.description,
//   //     questionType: createPollInput.questionType,
//   //     endTime: createPollInput.endTime,
//   //     maxOption: createPollInput.maxOption,
//   //     minOption: createPollInput.minOption,
//   //   };
//   //   if (createPollInput.choices) {
//   //     data.choices = {
//   //       createMany: {
//   //         data: createPollInput.choices,
//   //       },
//   //     };
//   //   }
//   //   console.log('123', { data });
//   //   return this.prisma.polls.create({ data });
//   // }

//   async findAll() {
//     return this.prisma.polls.findMany();
//   }

//   async findOne(id: number, selectField: Prisma.pollsSelect = null) {
//     const polls = await this.prisma.polls.findUnique({
//       where: { id },
//       select: selectField,
//     });
//     if (!polls) throw new NotFoundException(`polls id: ${id} not found`);
//     return polls;
//   }

//   async update(id: number, updatePollInput: UpdatePollInput) {
//     await this.findOne(id);
//     const data: Prisma.pollsUpdateInput = {
//       description: updatePollInput.description,
//       pollName: updatePollInput.pollName,
//       endTime: updatePollInput.endTime,
//       questionType: updatePollInput.questionType,
//     };
//   }

//   async remove(id: number) {
//     const polls = await this.findOne(id);
//     await this.prisma.polls.delete({ where: { id } });
//     return polls;
//   }

//   // async getChoice(poll: Polls) {
//   //   const choicepoll = await this.prisma.polls
//   //     .findUnique({
//   //       where: { id: poll.id },
//   //     })
//   //     .choices();
//   //   console.log(choicepoll, 'choicepoll');
//   //   return choicepoll;
//   // }
//   // async polls(pollsId: number, choiceId: number) {
//   //   const poll = await this.prisma.choices.findFirst({
//   //       where: { id, AND: {ch} },
//   //   });
//   // }
// }

// // poll ends on ku  is active boolean
