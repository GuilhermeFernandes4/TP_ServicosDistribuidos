const express = require('express');
const { Pool } = require('pg'); // Importa o driver do PostgreSQL
const app = express();
app.use(express.json());

// Configuração da conexão com o banco de dados
const pool = new Pool({
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || 5432,
  user: process.env.DATABASE_USER || 'user',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'mydatabase',
});

// GET: Obter todos os itens
app.get('/items', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM items');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Criar um novo item
app.post('/items', async (req, res) => {
  const { name, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Atualizar um item por ID
app.put('/items/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  try {
    const result = await pool.query(
      'UPDATE items SET name = $1, description = $2 WHERE id = $3 RETURNING *',
      [name, description, id]
    );
    if (result.rowCount === 0) {
      res.status(404).json({ error: 'Item não encontrado' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Remover um item por ID
app.delete('/items/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query('DELETE FROM items WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      res.status(404).json({ error: 'Item não encontrado' });
    } else {
      res.status(204).send();
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('API running on http://localhost:3000');
});