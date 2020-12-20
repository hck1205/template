import { DBConfig } from './config';
import { createPool } from 'mysql2/promise';

const mode = process.env.NODE_ENV as string;

export async function connect() {
  const connection = await createPool({
    ...DBConfig[mode],
    connectionLimit: 10,
  });

  return connection;
}
