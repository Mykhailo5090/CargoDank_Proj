const bcrypt = require('bcrypt');
const client = require('./db'); // Підключення до бази даних

// Функція для реєстрації користувача
async function registerUser(name, email, password) {
  try {
    // Перевірка, чи існує користувач з таким email
    const res = await client.query('SELECT * FROM users WHERE email = $1', [
      email,
    ]);
    if (res.rows.length > 0) {
      throw new Error('Користувач з таким email вже існує');
    }

    // Хешування пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Вставка нового користувача в таблицю
    const result = await client.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id',
      [name, email, hashedPassword]
    );
    console.log('User registered with ID:', result.rows[0].id);
  } catch (error) {
    console.error('Error registering user:', error.message);
    throw error;
  }
}

module.exports = { registerUser };
