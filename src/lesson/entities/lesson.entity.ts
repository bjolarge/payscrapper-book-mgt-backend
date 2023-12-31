import { Column, Entity,ObjectIdColumn,PrimaryColumn,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lesson{
    // @PrimaryGeneratedColumn()
    // id:string;
    @ObjectIdColumn()
    _id:string;
    @PrimaryColumn()
    id:string;
    @Column()
    name:string;
    @Column()
    startDate:string;
    @Column()
    endDate:string;

}