import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'hostname',
  user: 'username',
  password: 'password',
  database: 'database_name',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
