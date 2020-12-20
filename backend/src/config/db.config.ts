import path from 'path';
import dotenv from 'dotenv';

const dotenvPath = path.resolve(__dirname, '..', '.env');

dotenv.config({ path: dotenvPath });

const DBConfig: { [key: string]: any } = {
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

export default DBConfig;
