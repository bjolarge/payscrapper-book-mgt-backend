import { Field, InputType } from "@nestjs/graphql";
import {IsString, MinLength } from "class-validator";

//Just a graphql concept
@InputType()
export class CreateBookDto{
    @MinLength(1)
    @Field()
    name:string;

    @IsString()
    @Field()
    description:string;
}