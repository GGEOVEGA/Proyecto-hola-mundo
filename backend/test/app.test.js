const request = require("supertest");
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

// Crear una app de Express para testing
const app = express();
app.use(cors());

// Mock de la ruta principal
app.get("/", (req, res) => {
  res.json({
    mensaje: "Hola Mundo desde el Backend con Node.js (en Docker)",
    usuario: "Estudiante Ingenieria Software",
  });
});

describe("API Tests", () => {
  test("GET / should return Hola Mundo message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("mensaje");
    expect(response.body.mensaje).toContain("Hola Mundo");
    expect(response.body).toHaveProperty("usuario");
  });
});
