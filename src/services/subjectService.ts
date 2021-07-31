import { getRepository } from "typeorm";
import Subject from "../entities/Subject";

export async function getSubject() {

    const result = await getRepository(Subject).find({
        relations: ["term", "exam"],
        order: { termId: "ASC"}
    });

    return result;
}
