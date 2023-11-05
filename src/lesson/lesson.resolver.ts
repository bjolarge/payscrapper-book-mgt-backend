import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonDto } from "./dto/create-lesson.dto";
import { Lesson } from "./entities/lesson.entity";

@Resolver(of=>LessonType)
export class LessonResolver{
constructor(private lessonService: LessonService) {}

//get lesson by Id
@Query(returns=>LessonType)
lesson(
    @Args('id')id:string,
){
return this.lessonService.getLesson(id);
}

//get all lessons
// @Query(returns=>[LessonType])
// lessons(){
// return this.lessonService.getLessons();
// }

@Query(returns => [LessonType])
async lessons(): Promise<Lesson[]> {
  return await this.lessonService.getLessons();
}

// create lessons
@Mutation(returns=>LessonType)
createLesson(
@Args('createLessonDto')createLessonDto:CreateLessonDto,
){
//return this.lessonService.createLesson(createLessonDto);
return this.lessonService.createLesson(createLessonDto);
}
}