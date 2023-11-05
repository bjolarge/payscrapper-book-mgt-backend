import { Field, InputType } from "@nestjs/graphql";
import { IsDateString, IsString, MinLength } from "class-validator";

//Just a graphql concept
@InputType()
export class CreateLessonDto{
    @MinLength(1)
    @Field()
    name:string;

    @IsDateString()
    @Field()
    startDate:string;

    @IsDateString()
    @Field()
    endDate:string;

}