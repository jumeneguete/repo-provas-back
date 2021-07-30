import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createExam } from "../factories/userFactory";
import { clearExamDatabase } from "../utils/database";
import { Body } from "../../src/controllers/examControllers"

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearExamDatabase();
});

afterAll(async () => {
  await getConnection().close();  // ?????????????????????????????
});

const agent = supertest(app)

describe("POST /exam", () => {

  function generateBody(){
    const body : Body = {
      name: "2000",
      semester: "1",
      link: "https://educaemcasa.petropolis.rj.gov.br/uploads/bibliotecas/1601725787-1-5059990448471277738-pdf.pdf",
      subjectId: 1,
      teacherId: 1,
      typeId: 1
    }

    return body;
  }

  it("should answer with status 201 when receive a valid body", async () => {
    const body = generateBody();

    const response = await agent.post("/exam").send(body);

    expect(response.status).toBe(201);
  });

  it("should answer with status 400 when receive an invalid body", async () => {
    const body = generateBody();
    delete body.subjectId;

    const response = await agent.post("/exam").send(body);

    expect(response.status).toBe(400);
  });

  it("should answer with status 400 when receive an invalid body", async () => {
    const body = generateBody();
    body.link = "";

    const response = await agent.post("/exam").send(body);

    expect(response.status).toBe(400);
  });

  it("should answer with status 401 when link is not a string with extension '.pdf'", async () => {
    const body = generateBody();
    body.link = "teste";

    const response = await agent.post("/exam").send(body);

    expect(response.status).toBe(401);
  });

  it("should answer with status 401 when name is not 1990 >= number <= currentYear", async () => {
    const body = generateBody();
    body.name = "1800";

    const response = await agent.post("/exam").send(body);

    expect(response.status).toBe(401);
  });

  it("should answer with status 401 when semester is not equal to 1 or 2", async () => {
    const body = generateBody();
    body.semester = "9";

    const response = await agent.post("/exam").send(body);

    expect(response.status).toBe(401);
  });

  it("should answer with status 401 when subjectId, teacherId or typeId are not inytegers", async () => {
    const body = generateBody();
    body.subjectId = 1.34

    const response = await agent.post("/exam").send(body);

    expect(response.status).toBe(401);
  });

  it("should answer with status 409 when the register already exists", async () => {
    const body = generateBody();

    await createExam(body);
    await createExam(body);

    const response = await agent.post("/exam").send(body);

    expect(response.status).toBe(409);
  });

  it("should answer with status 409 when link already exists in any register", async () => {
    const body = generateBody();
    await createExam(body);
    await createExam(body);

    const response = await agent.post("/exam").send(body);

    expect(response.status).toBe(409);
  });
});