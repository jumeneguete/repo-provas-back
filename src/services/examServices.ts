import { getRepository } from "typeorm";

import Subjects from "../entities/Exams";

export async function insert () {
  const users = await getRepository(Subjects).find();
  
  return users;
}
