import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Subjects from "./Subjects";
import Teachers from './Teachers';
import Types from "./Types";

@Entity("exams")
export default class Exams {
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

  @ManyToOne(() => Subjects, subjects => subjects.id)
  subjects: Subjects;

  @ManyToOne(() => Teachers, teachers => teachers.id)
  teachers: Teachers;

  @ManyToOne(() => Types, types => types.id)
  type: Types;
}
