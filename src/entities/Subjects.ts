import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import Terms from "./Terms";
import Exams from "./Exams";

@Entity("subjects")
export default class Subjects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  termId: number;

  @ManyToOne(() => Terms, terms => terms.id)
    subjects: Terms;

  @OneToMany(() => Exams, exams => exams.subjectId)
  exams: Exams[];

}
