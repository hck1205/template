import path from 'path';
import dotenv from 'dotenv';

const dotenvPath = path.resolve(__dirname, '..', '..', '.env');
dotenv.config({ path: dotenvPath });

export const SERVE_MODE = process.env.NODE_ENV as string;

export const DB_ACESS_INFO: { [key: string]: any } = {
  development: {
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: process.env.DB_PASSWORD,
    database: 'node_mysql_ts',
  },
  stage: {
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: process.env.DB_PASSWORD,
    database: 'node_mysql_ts',
  },
  production: {
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: process.env.DB_PASSWORD,
    database: 'node_mysql_ts',
  },
};
