import { Request, Response } from "express";

import * as examService from "../services/examServices";

export async function insertExam (req: Request, res: Response) {
  try {
    const users = await examService.insert();
    res.send(users);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
