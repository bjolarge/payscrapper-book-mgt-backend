// import * as bcrypt from 'bcryptjs';
// import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Entity()
// @ObjectType()
// export class User {
//   @PrimaryGeneratedColumn()
//   @Field(() => ID)
//   id: number; 

//   @Column({unique: true}) //<- Mongoose
//   @Field()
//   email: string;

//   @Column()
//   @Field()
//   name: string;

//   @Column()
//   password: string;

//   @Column()
//   confirmToken: string;

//   @Column({ default: false })
//   active: boolean;

//   comparePassword: (candidatePassword: string) => boolean;
// }

// @InputType()
// export class CreateUserInput {
//   @Field()
//   name: string;

//   @Field()
//   email: string;

//   @Field()
//   password: string;
// }

// @InputType()
// export class ConfirmUserInput {
//   @Field()
//   email: string;

//   @Field()
//   confirmToken: string;
// }

// @InputType()
// export class LoginInput {
//   @Field()
//   email: string;

//   @Field()
//   password: string;
// }