import { Request, Response } from "express";
import * as examService from "../services/examServices";
import { idSchema } from "../schemas/idSchema";

export interface Body {
  name: string;
  semester: string;
  link: string;
  subjectId: number;
  teacherId: number;
  typeId: number;
}

export async function insertExam(req: Request, res: Response) {
  try {
    const body: Body = req.body;
    const { name, semester, link, subjectId, teacherId, typeId } = body;

    const NotValidBody =
      !name || !semester || !link || !subjectId || !teacherId || !typeId;
    if (NotValidBody) return res.sendStatus(400);

    const exam = await examService.insert(body);
    if (exam === null) return res.sendStatus(409);
    if (!exam) return res.sendStatus(401);

    res.status(201).send(exam);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getExamBySubject(req: Request, res: Response) {
  const id: number = Number(req.params.id);
  const validId = idSchema.validate({ id });

  try {
    if (!id || validId.error) return res.sendStatus(400);
    const result = await examService.getExamBySubject(id);

    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getExamByTeacher(req: Request, res: Response) {
  const id: number = Number(req.params.id);
  const validId = idSchema.validate({ id });

  try {
    if (!id || validId.error) return res.sendStatus(400);
    const result = await examService.getExamByTeacher(id);

    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
