const express = require("express");
const { Client } = require("pg");
const dotenv = require("dotenv");

function gerarHTML(mensagem, ambiente = "") {
  return `<html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Laboratório de Docker</title>
      </head>
      <body>
        <h1>Laboratório de Docker</h1>
        <p>${mensagem}</p>
        <p>${ambiente}</p>
      </body>
    </html>`;
}

const app = express();

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432,
});

app.get("/", async (req, res) => {
  await client.connect();
  try {
    res
      .status(200)
      .send(
        gerarHTML(
          "Gestão Acadêmica Simplificada – Ambiente inicial configurado com Docker Compose ✅",
          process.env.APP_ENV
        )
      );
  } catch (error) {
    console.log("Falha na comunicação: ", error);
    res.status(500).send(gerarHTML("Erro ao conectar!"));
  }
});

app.listen(5000, () =>
  console.warn("Servidor rodando em http://localhost:5000")
);
