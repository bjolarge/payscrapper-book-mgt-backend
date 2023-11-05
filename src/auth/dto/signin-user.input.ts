import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsStrongPassword, Length, Matches } from 'class-validator';

@InputType()
export class SigninUserInput {
  @Field()
  @IsString()
  @Length(4, 20)
  username: string;

  @Field()
  @IsString()
  @Length(8, 50)
//   @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
//     message: 'password is too weak',
//   })
@IsStrongPassword()
  password: string;
}