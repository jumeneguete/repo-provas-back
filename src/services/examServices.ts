import { getRepository } from "typeorm";
import { Body } from "../controllers/examControllers";
import Exams from "../entities/Exams";

export async function insert (body : Body) {

  const bodyInfo : Body = {
      name: body.name,
      semester: body.semester,
      link: body.link,
      subjectId: body.subjectId,
      teacherId: body.teacherId,
      typeId: body.typeId
  }
  const newExam = getRepository(Exams).create(bodyInfo);
  const result = await getRepository(Exams).save(newExam);
  
  return result;
}
