import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Exams from "./Exams";

@Entity("types")
export default class Types {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Exams, exams => exams.typeId)
  exams: Exams[];

}