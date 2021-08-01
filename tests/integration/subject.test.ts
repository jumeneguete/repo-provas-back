import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

const agent = supertest(app)

describe("GET /subject", () => {

  it("should answer with status 200 when return all subjects from database", async () => {
    const response = await agent.get("/subject");

    expect(response.status).toBe(200);
  });

  it("should return an array from database", async () => {
    const response = await agent.get("/subject");

   expect(response.body).toEqual(expect.any(Array));
  });

});

describe("GET /subject", () => {

  it("should answer with status 200 when receive a valid param and return all subjects from database", async () => {
    const param = "1";
    const response = await agent.get(`/${param}/subject-teacher`);

    expect(response.status).toBe(200);
  });

  it("should return an array from database", async () => {
    const param = "1";
    const response = await agent.get(`/${param}/subject-teacher`);

   expect(response.body).toEqual(expect.any(Array));
  });

  it("should return an array from database when receive a valid param", async () => {
    const param = "1"
    const response = await agent.get(`/${param}/subject-teacher`);

   expect(response.body).toEqual(expect.any(Array));
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