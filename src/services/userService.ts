import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Subjects from "../entities/User";

export async function getSubjects () {
  const users = await getRepository(Subjects).find();
  
  return users;
}
