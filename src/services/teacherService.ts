import { getRepository } from "typeorm";
import Exam from "../entities/Exam";
import Teacher from "../entities/Teacher";
import TeacherSubject from "../entities/teacherSubject";

export async function getTeacher() {

    // const result = await getRepository(TeacherSubject).find({
    //     relations: ["teacher", "subject"]
    // });

    // const result2 = await getRepository(Exam).find({
    //     relations: ["teacher"],
    //     order: {teacherId: "ASC"}

    // });


    const result3 = await getRepository(Teacher).find({
        relations: ["exam"]

    });

    return result3;
}


