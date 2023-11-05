import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Book')
export class BookType{
    @Field(type=>ID)
    id:string;
   @Field()
//    @Field(() => String, { nullable: true } )
    name:string;
    @Field()
    description:string;
}