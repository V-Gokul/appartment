import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePollInput } from './dto/create-poll.input';
import { UpdatePollInput } from './dto/update-poll.input';
import { Polls } from './poll.model';

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

  async removePoll(id: number, updatePollInput: UpdatePollInput) {
    await this.findOne(id);
    const data: Prisma.pollsUpdateInput = {
      isAvailable: false,
    };
    return this.prisma.polls.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    const pollm = await this.findOne(id);
    await this.prisma.polls.delete({ where: { id } });
    if (!pollm) throw new NotFoundException(`poll id ${id}not found`);
    return pollm;
  }

  async getOption(poll: Polls) {
    return await this.prisma.polls
      .findUnique({ where: { id: poll.id } })
      .options();
  }
}
