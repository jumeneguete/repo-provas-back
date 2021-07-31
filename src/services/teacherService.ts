import { getRepository } from "typeorm";
import Teacher from "../entities/Teacher";

export async function getTeacher() {

    const result3 = await getRepository(Teacher).find({
        relations: ["exam"]

    });

    return result3;
}


