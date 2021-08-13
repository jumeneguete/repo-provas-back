import { getRepository } from "typeorm";
import Teacher from "../entities/Teacher";

export async function getTeacher() {

    const teacher = await getRepository(Teacher).find({
        relations: ["exam"]

    });

    return teacher;
}


