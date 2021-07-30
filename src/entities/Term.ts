import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Subject from "./Subject";

@Entity("term")
export default class Term {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Subject, subject => subject.termId)
  subject: Subject[];
}
