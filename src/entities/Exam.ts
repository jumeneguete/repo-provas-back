import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Subject from "./Subject";
import Teacher from './Teacher';
import Type from "./Type";

@Entity("exam")
export default class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  semester: string;

  @Column()
  link: string;

  @Column()
  subjectId: number

  @Column()
  teacherId: number

  @Column()
  typeId: number;

  @ManyToOne(() => Subject, subject => subject.id)
  subject: Subject;

  @ManyToOne(() => Teacher, teacher => teacher.id)
  teacher: Teacher;

  @ManyToOne(() => Type, type => type.id)
  type: Type;
}
