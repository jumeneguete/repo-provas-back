import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createUser } from "../factories/userFactory";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("GET /users", () => {
  it("should answer with text \"OK!\" and status 200", async () => {

    const response = await supertest(app).get("/subjects");
   

    expect(response.status).toBe(200);
  });
});
