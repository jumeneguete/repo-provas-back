import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Exam from "./Exam";

@Entity("type")
export default class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Exam, exam => exam.typeId)
  exam: Exam[];

}