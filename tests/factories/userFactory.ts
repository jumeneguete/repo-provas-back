import { getRepository } from "typeorm";
import { Body } from "../../src/controllers/examControllers"

import Exam from "../../src/entities/Exam";

export async function createExam (body: Body) {

  const newExam = getRepository(Exam).create(body);
  const result = await getRepository(Exam).save(newExam);

  return result;
}
