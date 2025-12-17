const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 5000;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

app.get('/', (req, res) => {
    res.send(`
        <h1>Gestão Acadêmica Simplificada</h1>
        <p>Ambiente inicial configurado com Docker Compose (Node.js + Postgres)</p>
    `);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});