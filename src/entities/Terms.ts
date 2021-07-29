import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Subjects from "./Subjects";

@Entity("terms")
export default class Terms {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Subjects, subjects => subjects.termId)
  subjects: Subjects[];
}
