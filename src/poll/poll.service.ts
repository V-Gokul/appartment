import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePollInput } from './dto/create-poll.input';
import { UpdatePollInput } from './dto/update-poll.input';
import { Option, Polls, PollSelection } from './poll.model';

@Injectable()
export class PollService {
  constructor(private prisma: PrismaService) {}
  async create(createPollInput: CreatePollInput) {
    const data: Prisma.pollsCreateInput = {
      pollName: createPollInput.pollName,
      description: createPollInput.description,
      postedAt: createPollInput.postedAt,
      pollExpiry: createPollInput.pollExpiry,
      questionType: createPollInput.questionType,
      maxOptions: createPollInput.maxOptions,
      minOptions: createPollInput.minOptions,
    };
    if (createPollInput.option) {
      data.options = {
        createMany: {
          data: createPollInput.option,
        },
      };
    }
    return this.prisma.polls.create({ data });
  }

  async findAll() {
    return await this.prisma.polls.findMany({
      include: { options: { select: { pollSelection: true } } },
    });
  }

  async findOne(id: number, selectField: Prisma.pollsSelect = null) {
    const poll = await this.prisma.polls.findUnique({
      where: { id },
      select: selectField,
    });
    if (!poll) throw new NotFoundException(`poll id ${id} not found`);
    return poll;
  }
  async pollUpdate(id: number, updatePollInput: UpdatePollInput) {
    await this.findOne(id);
    const data: Prisma.pollsUpdateInput = {
      pollName: updatePollInput.pollName,
      description: updatePollInput.description,
      maxOptions: updatePollInput.maxOptions,
      minOptions: updatePollInput.maxOptions,
      //  { connect: { id: updatePollInput.selection } },
    };
    if (updatePollInput.options) {
      for (const optionPoll of updatePollInput.options) {
        const pollOption = await this.prisma.options
          .findUnique({
            where: { id: optionPoll.id },
          })
          .polls();
        if (!pollOption) {
          throw new NotFoundException(`optionId: ${id}not found`);
        }
        data.options = {
          update: {
            where: { id: optionPoll.id },
            data: { text: optionPoll.text },
          },
          // connect: { id: updatePollInput.selection }
        };
      }
    }
    if(updatePollInput.selection){
      data.
    }
    return this.prisma.polls.update({ where: { id }, data });
  }

  async removePoll(id: number) {
    await this.findOne(id);
    const data: Prisma.pollsUpdateInput = {
      isAvailable: false,
    };
    return this.prisma.polls.update({
      where: { id },
      data,
    });
  }
  async getOption(poll: Polls) {
    return await this.prisma.polls
      .findUnique({ where: { id: poll.id } })
      .options();
  }
}
