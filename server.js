const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Підключення до .env файлу для збереження конфіденційних даних

const app = express();
app.use(cors()); // Включаємо CORS
app.use(express.json()); // Для розбору JSON-запитів

// Підключення до бази даних PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Реєстрація користувача
app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Перевірка, чи існує вже користувач з таким email
    const checkUser = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    if (checkUser.rows.length > 0) {
      return res.status(400).json({ message: 'Email вже зареєстрований' });
    }

    // Хешуємо пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Додаємо нового користувача в базу даних
    const result = await pool.query(
      'INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *',
      [username, hashedPassword, email]
    );
    console.log('User registered:', result.rows[0]);
    res
      .status(201)
      .json({ message: 'User registered successfully', user: result.rows[0] });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Логін користувача
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Перевірка наявності користувача з таким email
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);

    const user = result.rows[0];

    // Якщо користувач не знайдений, повертаємо помилку
    if (!user) return res.status(400).json({ message: 'User not found' });

    // Перевірка пароля
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Створення JWT токену
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || '1', {
      expiresIn: '1h',
    });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Error logging in' });
  }
});

// Слухач на порту 5001
app.listen(5001, () => console.log('Backend running on port 5001'));
