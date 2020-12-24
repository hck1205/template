import { createPool } from 'mysql2/promise';

import { DB_ACESS_INFO, SERVE_MODE } from './constpack';

export async function connect() {
  const connection = await createPool({
    ...DB_ACESS_INFO[SERVE_MODE],
    connectionLimit: 10,
  });

  return connection;
}
