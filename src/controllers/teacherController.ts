import { Request, Response } from "express";
import * as teacherService from "../services/teacherService";

export async function getTeacher(req: Request, res: Response) {
  try {
    const result = await teacherService.getTeacher();

    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
