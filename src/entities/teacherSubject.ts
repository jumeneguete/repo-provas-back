import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Teacher from "./Teacher";
import Subject from "./Subject";

@Entity("teacherSubject")
export default class TeacherSubject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teacherId: number;

  @Column()
  subjectId: number;

  @ManyToOne(() => Teacher, teacher => teacher.id)
  teacher: Teacher;

  @ManyToOne(() => Subject, subject => subject.id)
  subject: Subject;

}