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

  it("should answer with status 200 when return all subjects from database", async () => {
    const response = await agent.get("/subject-teacher");

    expect(response.status).toBe(200);
  });

  it("should return an array from database", async () => {
    const response = await agent.get("/subject-teacher");

   expect(response.body).toEqual(expect.any(Array));
  });

});