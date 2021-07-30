import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Exam from "./Exam";
import TeacherSubject from "./teacherSubject";

@Entity("teacher")
export default class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Exam, exam => exam.teacherId)
  exam: Exam[];

  @OneToMany(() => TeacherSubject, teacherSubject => teacherSubject.teacherId)
  teacherSubject: TeacherSubject[];

}
