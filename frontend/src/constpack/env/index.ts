type ServerURL = {
  production: string;
  stage: string;
  development: string;
};

const API_URL: ServerURL = {
  production: '',
  stage: '',
  development: 'http://localhost:3000/api/v1',
};

// Server Stage
type Mode = 'production' | 'stage' | 'development';
export const SERVER_STAGE = process.env.STAGE as Mode;

// Server URL Info
export const API_BASE_URL: string = API_URL[SERVER_STAGE];
export const API_REQUEST_TIMEOUT = 20000;
export const SESSION_COOKIE_KEY = 'tmpbck';
