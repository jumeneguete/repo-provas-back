import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as examController from "./controllers/examControllers";
import * as subjectController from "./controllers/subjectController";
import * as teacherController from "./controllers/teacherController";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/exam", examController.insertExam);
app.get("/subject", subjectController.getSubjects);
app.get("/:id/subject/", examController.getExamBySubject);
app.get("/teacher", teacherController.getTeacher);
app.get("/:id/teacher/", examController.getExamByTeacher);


export async function init () {
  await connectDatabase();
}

export default app;
