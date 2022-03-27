import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePollInput } from './dto/create-poll.input';
import { UpdatePollInput } from './dto/update-poll.input';

@Injectable()
export class PollService {
  constructor(private prisma: PrismaService) {}
  async create(createPollInput: CreatePollInput) {
    const data: Prisma.pollsCreateInput = {
      pollName: createPollInput.pollName,
      description: createPollInput.description,
      postedAt: createPollInput.postedAt,
      pollExpiry: createPollInput.pollExipry,
      questionType: createPollInput.questionType,
      maxOptions: createPollInput.maxOptions,
      minOptions: createPollInput.minOptions,
    };
    if (createPollInput.option) {
      data.options = {
        createMany: {
          data: createPollInput.option,
        },
        connect: {},
      };
    }
  }

  findAll() {
    return `This action returns all poll`;
  }

  findOne(id: number) {
    return `This action returns a #${id} poll`;
  }

  update(id: number, updatePollInput: UpdatePollInput) {
    return `This action updates a #${id} poll`;
  }

  remove(id: number) {
    return `This action removes a #${id} poll`;
  }
}