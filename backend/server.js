const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

// CORREGIR ESTA LÍNEA:
const dbPath = path.join(__dirname, "../database/data.json");
const data = JSON.parse(fs.readFileSync(dbPath, "utf8"));

app.get("/", (req, res) => {
  res.json({
    mensaje: "Hola Mundo desde el Backend con Node.js (en Docker)",
    usuario: data.usuario,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
