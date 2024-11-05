const { Pool } = require('pg');
require('dotenv').config(); // Залежно від використання

const pool = new Pool({
  host: process.env.DB_HOST, // Наприклад, 'localhost'
  port: process.env.DB_PORT || 5432, // За замовчуванням 5432
  user: process.env.DB_USER, // Ваше ім'я користувача PostgreSQL
  password: process.env.DB_PASSWORD, // Ваш пароль
  database: process.env.DB_NAME, // Назва вашої бази даних
});

module.exports = pool;
