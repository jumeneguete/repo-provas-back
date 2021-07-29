import { Request, Response } from "express";

import * as examService from "../services/examServices";

export interface Body {
  name: string,
  semester: string,
  link: string,
  subjectId: number,
  teacherId: number,
  typeId: number
}

export async function insertExam (req: Request, res: Response) {
  try {

    const body : Body = req.body;
    const { name, semester, link, subjectId, teacherId, typeId} = body;

    const exam = await examService.insert(body);
    res.send(exam);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
