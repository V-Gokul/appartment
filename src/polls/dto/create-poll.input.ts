// import { InputType, Int, Field } from '@nestjs/graphql';
// import { IsNotEmpty, IsOptional } from 'class-validator';

// @InputType()
// export class CreatePollInput {
//   @Field()
//   @IsNotEmpty()
//   pollName: string;

//   @Field()
//   @IsNotEmpty()
//   description: string;

//   @Field()
//   @IsNotEmpty()
//   questionType: string;

//   @Field()
//   @IsNotEmpty()
//   endTime: Date;

//   @Field()
//   @IsOptional()
//   minOption: number;

//   @Field()
//   @IsOptional()
//   maxOption: number;

//   @Field(() => [CreateChoiceInput], { nullable: true })
//   @IsNotEmpty()
//   @IsOptional()
//   choices: CreateChoiceInput[];
// }

// @InputType()
// export class CreateChoiceInput {
//   @Field()
//   @IsNotEmpty()
//   chooseOptions: string;
// }
