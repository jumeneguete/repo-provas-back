import { getRepository } from "typeorm";
import { Body } from "../controllers/examControllers";
import Exam from "../entities/Exam";
import Joi from "joi";
import dayjs from 'dayjs'

const schema = Joi.object({ 
  name: Joi.string().length(4),
  semester: Joi.string().length(1),
  link: Joi.string().pattern(new RegExp(".+\.pdf$")),
  subjectId: Joi.number().integer(),
  teacherId: Joi.number().integer(),
  typeId: Joi.number().integer()
  });

export async function insert ({ name, semester, link, subjectId, teacherId, typeId}: Body) {
  const receivedBody= { name, semester, link, subjectId, teacherId, typeId}

  const validation = schema.validate(receivedBody);
  const validName  = Number(name) >= 1990 && Number(name) <= dayjs().year();
  const validSemester = Number(semester) === 1 || Number(semester) === 2;

  if( validation.error || !validName || !validSemester) return false;

  const existingExam = await getRepository(Exam).find({where: receivedBody});
  const existingUrl = await getRepository(Exam).find({where: {link}});
  
  if(existingExam.length > 0 || existingUrl.length > 0) return null;

  const bodyInfo : Body = receivedBody;

  const newExam = getRepository(Exam).create(bodyInfo);
  const result = await getRepository(Exam).save(newExam);
  
  return result;
}

export async function getExamBySubject(id : number) {
  const result = getRepository(Exam).find({
    relations: ["teacher"],
    where: {subjectId : id}
  });

  return result;
}
