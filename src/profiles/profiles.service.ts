import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}
  async create(createProfileInput: CreateProfileInput) {
    const data: Prisma.profileCreateInput = {
      name: createProfileInput.name,
      email: createProfileInput.email,
    };
    const profile = await this.prisma.profile.create({ data });
    return profile;
  }

  async findAll() {
    return this.prisma.profile.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileInput: UpdateProfileInput) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
