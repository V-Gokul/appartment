import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreatePollInput,
  CreatePollSelectionInput,
} from './dto/create-poll.input';
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
  async createPollSelection(createSelection: CreatePollSelectionInput) {
    // if(createSelection.option_id){
    //   const ids = [];
    //   for (const id of createSelection.option_id){
    //     ids.push(await this.prisma.options.findUnique({where: { id: id}}))
    //   }

    // }
    // const option_ids = [];
    // for (const options of createSelection.option_id) {
    //   option_ids.push(await this.prisma.options.findUnique(options));
    // }

    const data: Prisma.pollSelectionCreateInput = {
      options: {
        // connect: option_ids,
      },

      profile: {
        connect: { id: createSelection.profile_id },
      },
      poll: {
        connect: { id: createSelection.poll_id },
      },
    };
    // const data: Prisma.pollSelectionCreateInput = {
    //   options: {
    //     connect: { id: createSelection.option_id },
    //   },

    //   profile: {
    //     connect: { id: createSelection.profile_id },
    //   },
    //   poll: {
    //     connect: { id: createSelection.poll_id },
    //   },
    // };

    return await this.prisma.pollSelection.create({ data });
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

  async getSelection(poll: Polls) {
    return await this.prisma.polls
      .findUnique({ where: { id: poll.id } })
      .pollSelection();
  }
}
