import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BookType } from "../book/type/book.type";
import { BookService } from "./book.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { Book } from "./entities/book.entity";

@Resolver(of=>BookType)
export class BookResolver{
constructor(private bookService: BookService) {}

//get book by Id
@Query(returns=>BookType)
book(
    @Args('id')id:string,
){
return this.bookService.getBook(id);
}

//get all books
@Query(returns => [BookType])
async books(): Promise<Book[]> {
  return await this.bookService.getBooks();
}

// create books
@Mutation(returns=>BookType)
createBook(
@Args('createBookDto')createBookDto:CreateBookDto,
){
return this.bookService.createBook(createBookDto);
}
}