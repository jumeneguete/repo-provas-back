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
app.get("/subject/:id", examController.getExamBySubject);
//app.get("/teacher", teacherController.getTeachers);
app.get("/teacher/:id", examController.getExamByTeacher);



app.get("/teste", examController.teste);

export async function init () {
  await connectDatabase();
}

export default app;
