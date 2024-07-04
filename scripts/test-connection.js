import pool from '../lib/db.js';

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    console.log('Connection successful:', rows);
  } catch (error) {
    console.error('Connection error:', error);
  }
}

testConnection();
