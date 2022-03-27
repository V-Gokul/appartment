import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class profile {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  createAt: Date;
}
