import { Column, Entity,ObjectIdColumn,PrimaryColumn,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{
    // @PrimaryGeneratedColumn()
    // id:string;
    @ObjectIdColumn()
    _id:string;
    @PrimaryColumn()
    id:string;
    
    @Column()
    name:string;
    @Column()
    description:string;
    
}