import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

export async function connect() {
  const connection = await createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: parseInt(process.env.DB_PORT as string),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
  });

  return connection;
}
