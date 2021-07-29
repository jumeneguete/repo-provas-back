import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Exams from "./Exams";

@Entity("teachers")
export default class Teachers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Exams, exams => exams.teacherId)
  exams: Exams[];

}
