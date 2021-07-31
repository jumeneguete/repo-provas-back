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

describe("GET /teacher", () => {

  it("should answer with status 200 when return all teachers from database", async () => {
    const response = await agent.get("/teacher");

    expect(response.status).toBe(200);
  });

  it("should return an array from database", async () => {
    const response = await agent.get("/teacher");

   expect(response.body).toEqual(expect.any(Array));
  });

});