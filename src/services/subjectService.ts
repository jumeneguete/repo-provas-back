import { getRepository } from "typeorm";
import Subject from "../entities/Subject";

export async function getSubject() {

    const result = await getRepository(Subject).find({
        relations: ["term"],
        order: { termId: "ASC"}
    });

    return result;
}

// const result2 = await getRepository(Exam).find({
//     relations: ["subject"]
    
// });  
