import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../book/entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)private bookRepository:Repository<Book>,
    ){}

    // this creates a unique lesson
    async createBook(createBookDto:CreateBookDto):Promise<Book> {
       const {name,description} = createBookDto;

        const book = await this.bookRepository.create({
            id:uuid(),
            name,
            description
        });

         return this.bookRepository.save(book);
      }

    //get all books
    async getBooks(): Promise<Book[]> {
        return this.bookRepository.find();
      }
    
    // get individual book
  async getBook(id) {
    const book = await this.bookRepository.findOne({where: {id}});
    if(!book){
      throw new NotFoundException(`Book with the given #${id} not found`);
    }
    return book;
  }

  //update individual book
  async update(id: string, updateBookDto:UpdateBookDto) {
    const book= await this.bookRepository.preload({
      id:id,
      ...updateBookDto,
    });
    if(!book){
      throw new NotFoundException(`The Book with the given ${id} not found`);
    }
    return this.bookRepository.save(book);
  }

  async remove(id:string) {
    const book = await this.getBook(id);
    return this.bookRepository.remove(book);
  }
}
