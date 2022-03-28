import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { PollsModule } from './polls/polls.module';
import { PrismaModule } from './prisma/prisma.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ProfilesModule } from './profiles/profiles.module';
import { PollModule } from './poll/poll.module';
@Module({
  imports: [
    UsersModule,

    PrismaModule,

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),

    ProfilesModule,

    PollModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
