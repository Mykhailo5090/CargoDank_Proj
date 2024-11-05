const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware для обробки JSON і CORS
app.use(cors());
app.use(express.json());

// Налаштування підключення до бази даних
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Тестовий роут для перевірки з'єднання
app.get('/api/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection error' });
  }
});

// Запуск серверу
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Отримати всі оголошення
app.get('/api/ads', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM ads');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve ads' });
  }
});
