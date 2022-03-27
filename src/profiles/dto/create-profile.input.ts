import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, isNotEmpty } from 'class-validator';

@InputType()
export class CreateProfileInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  email: string;

  // @Field()
  // @IsNotEmpty()
  // dob: string;
}
