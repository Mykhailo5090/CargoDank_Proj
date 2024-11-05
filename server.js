const express = require('express');
const cors = require('cors');
const pool = require('./db'); // Підключення до бази даних
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

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

// Запуск серверу
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
