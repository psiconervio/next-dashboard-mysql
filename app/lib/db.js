//archivo para conectarse a la base de datos phpmyadmin db4free.net
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'db4free.net',
  user: 'nodotecnologico',
  password: 'nodotecnologico',
  database: 'nodotecnologico',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;


// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'id21999724_nextadmin',
//   password: 'Nodotecnologico1*',
//   database: 'id21999724_nextadmin',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// export default pool;