import { Request, Response } from "express";

import * as userService from "../services/userService";

export async function getSubjects (req: Request, res: Response) {
  try {
    const users = await userService.getSubjects();
    res.send(users);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
