const request = require("supertest");
const app = require("../server.js");

describe("API Tests", () => {
  test("GET / should return Hola Mundo message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("mensaje");
    expect(response.body.mensaje).toContain("Hola Mundo");
  });
});
