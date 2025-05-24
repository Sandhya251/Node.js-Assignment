const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'mysql.railway.internal',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Connection failed:', err.message);
  } else {
    console.log(' Connected to MySQL database!');
    connection.release();
  }
  pool.end();
});
