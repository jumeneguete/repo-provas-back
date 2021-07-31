import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import Term from "./Term";
import Exam from "./Exam";
import TeacherSubject from "./teacherSubject";

@Entity("subject")
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  termId: number;
  @ManyToOne(() => Term, term => term.subject)
  @JoinColumn({ name: "termId"})
  term: Term;

  @OneToMany(() => Exam, exam => exam.subject)
  exam: Exam[];

  @OneToMany(() => TeacherSubject, teacherSubjec => teacherSubjec.subjectId)
  teacherSubject: TeacherSubject[];

}