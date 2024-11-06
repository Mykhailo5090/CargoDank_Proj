const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// File upload setup with validation
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // File type validation (images only)
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Тільки зображення дозволені!'), false);
    }
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // File size limit (5MB)
  },
});

app.use('/uploads', express.static('uploads'));

// PostgreSQL database connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Register user route
app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ message: 'Missing required fields: username, password, email' });
  }

  try {
    const checkUser = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    if (checkUser.rows.length > 0) {
      return res.status(400).json({ message: 'Email вже зареєстрований' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

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
    res
      .status(500)
      .json({ message: 'Error registering user', error: error.message });
  }
});

// Login user route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Missing required fields: email, password' });
  }

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    const user = result.rows[0];

    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || '1', {
      expiresIn: '1h',
    });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

// Updated cargo route with validation and file upload
app.post('/api/cargo', upload.single('image'), async (req, res) => {
  console.log('Request body for cargo:', req.body);
  console.log('Uploaded file:', req.file);

  const {
    description,
    price_per_km,
    origin,
    destination,
    cargo_type,
    weight,
    distance,
    deadline,
    total_price,
  } = req.body;

  // Extended validation for required fields
  if (
    !description ||
    !price_per_km ||
    !origin ||
    !destination ||
    !cargo_type ||
    !weight ||
    !distance ||
    !deadline
  ) {
    return res.status(400).json({
      message: "Відсутні обов'язкові поля",
      required: [
        'description',
        'price_per_km',
        'origin',
        'destination',
        'cargo_type',
        'weight',
        'distance',
        'deadline',
      ],
    });
  }

  try {
    // Numeric field validation
    const numericFields = {
      price_per_km: parseFloat(price_per_km),
      weight: parseFloat(weight),
      distance: parseFloat(distance),
      total_price: parseFloat(total_price),
    };

    for (const [field, value] of Object.entries(numericFields)) {
      if (isNaN(value) || value < 0) {
        return res.status(400).json({
          message: `Некоректне значення для поля ${field}. Має бути додатнім числом.`,
        });
      }
    }

    // Date format validation for deadline
    const deadlineDate = new Date(deadline);
    if (isNaN(deadlineDate.getTime())) {
      return res
        .status(400)
        .json({ message: 'Некоректний формат дати дедлайну' });
    }

    // Get image URL if uploaded
    const image_url = req.file ? `/uploads/${req.file.filename}` : null;

    const result = await pool.query(
      `INSERT INTO cargo 
       (description, price_per_km, origin, destination, cargo_type, weight, 
        distance, actuality, deadline, total_price, image_url) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
       RETURNING *`,
      [
        description,
        numericFields.price_per_km,
        origin,
        destination,
        cargo_type,
        numericFields.weight,
        numericFields.distance,
        true, // actuality default
        deadlineDate,
        numericFields.total_price,
        image_url,
      ]
    );

    console.log('Cargo added:', result.rows[0]);
    res.status(201).json({
      message: 'Вантаж успішно додано',
      cargo: result.rows[0],
    });
  } catch (error) {
    console.error('Error adding cargo:', error.message);
    res.status(500).json({
      message: 'Помилка при додаванні вантажу',
      error: error.message,
    });
  }
});

// Multer error handling
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res
        .status(400)
        .json({ message: 'Файл занадто великий. Максимальний розмір 5MB' });
    }
    return res.status(400).json({
      message: 'Помилка при завантаженні файлу',
      error: error.message,
    });
  }
  next(error);
});

app.listen(5001, () => console.log('Backend running on port 5001'));
