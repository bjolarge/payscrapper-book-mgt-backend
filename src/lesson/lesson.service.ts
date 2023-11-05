import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson)private lessonRepository:Repository<Lesson>,
    ){}

    // this creates a unique lesson
    async createLesson(createLessonDto:CreateLessonDto):Promise<Lesson> {
       const {name, startDate, endDate} = createLessonDto;

        const lesson = await this.lessonRepository.create({
            id:uuid(),
            name,
            startDate,
            endDate
        });

         return this.lessonRepository.save(lesson);
      }
 
    //  async getLessons():Promise<Lesson[]> {
    //  return await this.lessonRepository.find();
    // }
    //get all lessons
    async getLessons(): Promise<Lesson[]> {
        return this.lessonRepository.find();
      }
    
    // get individual lesson
  async getLesson(id) {
    const lesson = await this.lessonRepository.findOne({where: {id}});
    if(!lesson){
      throw new NotFoundException(`Lesson with the given #${id} not found`);
    }
    return lesson;
  }

  async update(id: string, updateLessonDto:UpdateLessonDto) {
    const lesson= await this.lessonRepository.preload({
      id:id,
      ...updateLessonDto,
      //flavors,
    });
    if(!lesson){
      throw new NotFoundException(`The Lesson with the given ${id} not found`);
    }
    return this.lessonRepository.save(lesson);
  }

  async remove(id:string) {
    const lesson = await this.getLesson(id);
    return this.lessonRepository.remove(lesson);
  }
}
