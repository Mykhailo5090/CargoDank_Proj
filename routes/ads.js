const express = require('express');
const { Pool } = require('pg');
const router = express.Router();

// Database connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Get all ads
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM ads');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve ads' });
  }
});

module.exports = router;
