import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

const agent = supertest(app);

describe("GET /subject", () => {

  function returnedSubjects() {
    const subject = {
      id: expect.any(Number),
      name: expect.any(String),
      termId: expect.any(Number),
      term: expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
      }),
      exam: expect.any(Array)
    }
    return subject;
  }

  it("should answer with status 200 when return all subjects from database", async () => {
    const response = await agent.get("/subject");

    expect(response.status).toBe(200);
  });

  it("should return an array from database", async () => {
    const response = await agent.get("/subject");

    const receivedSubjects = returnedSubjects();

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining(receivedSubjects)
      ])
    );
  });

});

describe("GET /:subId/subject-teacher", () => {

  function returnedSubjectAndTeacher() {
    const result = {
      id: expect.any(Number),
      teacherId: expect.any(Number),
      subjectId: expect.any(Number),
      teacher: expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
      }),
      subject: expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        termId: expect.any(Number)
      })
    }
    return result;
  }

  it("should answer with status 200 when receive a valid param and return all subjects from database", async () => {
    const param = "1";
    const response = await agent.get(`/${param}/subject-teacher`);

    expect(response.status).toBe(200);
  });

  it("should return an array from database when receive a valid param", async () => {
    const param = "1";
    const response = await agent.get(`/${param}/subject-teacher`);

    const receivedSubjectAndTeacher = returnedSubjectAndTeacher();

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining(receivedSubjectAndTeacher)
      ])
    );
  });

  it("should return an empty array from database when receive an unexistent param", async () => {
    const param = "123456789"
    const response = await agent.get(`/${param}/subject-teacher`);

    expect(response.body).toEqual(
      expect.arrayContaining([])
    );
  });

  it("should return status 400 when receive an invalid param - NaN", async () => {
    const param = "teste"
    const response = await agent.get(`/${param}/subject-teacher`);

    expect(response.status).toBe(400);
  });

  it("should return status 400 when receive an invalid param - not integer", async () => {
    const param = "1.1"
    const response = await agent.get(`/${param}/subject-teacher`);

    expect(response.status).toBe(400);
  });
});