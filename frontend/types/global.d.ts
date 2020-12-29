declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'stage' | 'production';
  }
}

declare type LooseObject = {
  [key: string]: any;
};
