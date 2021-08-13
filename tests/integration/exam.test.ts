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
  await clearExamDatabase();
  await getConnection().close();
});

const agent = supertest(app);

function generateBody() {
  const body: Body = {
    name: "2000",
    semester: "1",
    link: "https://educaemcasa.petropolis.rj.gov.br/uploads/bibliotecas/1601725787-1-5059990448471277738-pdf.pdf",
    subjectId: 1,
    teacherId: 1,
    typeId: 1
  }

  return body;
}

function returnedExam (){
  const exam = {
    id: expect.any(Number),
    semester: expect.any(String),
    link: expect.any(String),
    subjectId: expect.any(Number),
    teacherId: expect.any(Number),
    typeId: expect.any(Number),
    teacher: expect.any(Object),
    type: expect.any(Object),
    subject: expect.any(Object)
  }
  return exam;
}

describe("POST /exam", () => {

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




describe("GET /:id/subject", () => {

  it("should answer with status 200 when receive a valid param and returns from database", async () => {
    const param = "1"
    const response = await agent.get(`/${param}/subject`);

    expect(response.status).toBe(200);
  });

  it("should return an array from database when receive a valid and existing param", async () => {
    const body = generateBody();
    await createExam(body);
    const param = 1;

    const response = await agent.get(`/${param}/subject`);

    const receivedExam = returnedExam();

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining(receivedExam)
      ])
    );
  });

  it("should return an empty array when receive a valid param, but there is no exam from subject", async () => {
    const param = 1;

    const response = await agent.get(`/${param}/subject`);

    expect(response.body).toEqual(
      expect.arrayContaining([])
    );
 
  });

  it("should return status 400 when receive an invalid param - NaN", async () => {
    const param = "teste"
    const response = await agent.get(`/${param}/subject`);

    expect(response.status).toBe(400);
  });

  it("should return status 400 when receive an invalid param - not integer", async () => {
    const param = "1.1"
    const response = await agent.get(`/${param}/subject`);

    expect(response.status).toBe(400);
  });

});





describe("GET /:id/teacher", () => {

  it("should answer with status 200 when receive a valid param and returns from database", async () => {
    const param = "1"
    const response = await agent.get(`/${param}/teacher`);

    expect(response.status).toBe(200);
  });

  it("should return an array from database when receive a valid parma", async () => {
    const body = generateBody();
    await createExam(body);
    const param = "1"

    const response = await agent.get(`/${param}/teacher`);

    const receivedExam = returnedExam();

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining(receivedExam)
      ])
    );
  });

  it("should return an empty array when receive a valid param, but there is no exam from teacher", async () => {
    const param = 1;

    const response = await agent.get(`/${param}/subject`);

    expect(response.body).toEqual(
      expect.arrayContaining([])
    );
 
  });

  it("should return status 400 when receive an invalid param - NaN", async () => {
    const param = "teste"
    const response = await agent.get(`/${param}/teacher`);

    expect(response.status).toBe(400);
  });

  it("should return status 400 when receive an invalid param - not integer", async () => {
    const param = "1.1"
    const response = await agent.get(`/${param}/teacher`);

    expect(response.status).toBe(400);
  });

});