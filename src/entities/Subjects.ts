import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Terms from "./Terms";

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

}
