import { Request, Response } from "express";
import * as subjectService from "../services/subjectService";


export async function getSubjects (req: Request, res: Response){
    try{
        const result = await subjectService.getSubject();

        res.status(200).send(result);

    } catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}