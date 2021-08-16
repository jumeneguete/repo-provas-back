import { Request, Response } from "express";
import * as subjectService from "../services/subjectService";
import { idSchema } from "../schemas/idSchema";

export async function getSubjects(req: Request, res: Response) {
  try {
    const result = await subjectService.getSubject();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getTeacherBySubId(req: Request, res: Response) {
  const subId: number = Number(req.params.subId);
  const validId = idSchema.validate({ id: subId });

  try {
    if (!subId || validId.error) return res.sendStatus(400);
    const result = await subjectService.getTeacherBySubId(subId);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
