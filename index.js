const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

// Teste de conexão
pool.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err);
  } else {
    console.log('Conexão ao banco de dados bem-sucedida!');
  }
});

// Exemplo de query para criar tabela
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
  );
`;

pool.query(createTableQuery, (err, res) => {
  if (err) {
    console.error('Erro ao criar tabela', err);
  } else {
    console.log('Tabela criada com sucesso!');
  }
});

module.exports = pool;
