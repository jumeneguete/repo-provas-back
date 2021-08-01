import { getRepository } from "typeorm";
import Subject from "../entities/Subject";
import TeacherSubject from "../entities/teacherSubject";

export async function getSubject() {

    const result = await getRepository(Subject).find({
        relations: ["term", "exam"],
        order: { termId: "ASC" }
    });

    return result;
}

export async function getTeacherBySubId(subjectId: number) {

    const result = await getRepository(TeacherSubject).find({
        relations: ["teacher", "subject"],
        where: {subjectId}
    });

    return result;
}