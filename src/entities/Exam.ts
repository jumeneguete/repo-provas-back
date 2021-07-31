import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
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
  subjectId: number;
  @ManyToOne(() => Subject, subject => subject.exam)
  @JoinColumn({ name: "subjectId"})
  subject: Subject;

  @Column()
  teacherId: number;
  @ManyToOne(() => Teacher, teacher => teacher.exam)
  @JoinColumn({ name: "teacherId"})
  teacher: Teacher;

  @Column()
  typeId: number;
  @ManyToOne(() => Type, type => type.exam)
  @JoinColumn({ name: "typeId"})
  type: Type;

}
