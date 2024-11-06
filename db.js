const { Client } = require('pg');

const client = new Client({
  user: 'postgres', // користувач PostgreSQL
  host: 'localhost',
  database: 'cargodank', // ім'я вашої бази даних
  password: 'postgres', // пароль користувача PostgreSQL
  port: 5432,
});

client
  .connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error('Connection error', err.stack));

module.exports = client;
