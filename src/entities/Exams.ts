import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
  SubjectId: number

  @Column()
  teacherId: number

  @Column()
  typeId: number;

}
