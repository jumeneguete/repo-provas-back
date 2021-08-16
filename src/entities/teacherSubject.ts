import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Teacher from "./Teacher";
import Subject from "./Subject";

@Entity("teacherSubject")
export default class TeacherSubject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teacherId: number;
  @ManyToOne(() => Teacher, (teacher) => teacher.teacherSubject)
  @JoinColumn({ name: "teacherId" })
  teacher: Teacher;

  @Column()
  subjectId: number;
  @ManyToOne(() => Subject, (subject) => subject.teacherSubject)
  @JoinColumn({ name: "subjectId" })
  subject: Subject;
}
