import { getRepository } from "typeorm";
import { Body } from "../controllers/examControllers";
import Exam from "../entities/Exam";
import Joi from "joi";

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
  if( validation.error) return false;

  const bodyInfo : Body = receivedBody;

  const existingExam = await getRepository(Exam).find({where: receivedBody});
  const existingUrl = await getRepository(Exam).find({where: {link}});
  if(existingExam.length > 0 || existingUrl.length > 0) return null;

  const newExam = getRepository(Exam).create(bodyInfo);
  const result = await getRepository(Exam).save(newExam);
  
  return result;
}
