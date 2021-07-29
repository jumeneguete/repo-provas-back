import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as examController from "./controllers/examControllers";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/exam", examController.insertExam);
app.get("/teste", examController.teste);

export async function init () {
  await connectDatabase();
}

export default app;
