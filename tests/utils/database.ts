import { getRepository } from "typeorm";

import Exam from "../../src/entities/Exam";

export async function clearExamDatabase () {
  await getRepository(Exam).delete({});
}

