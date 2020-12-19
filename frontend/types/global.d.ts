export {};

declare global {
  interface ProcessEnv {
    [key: string]: string | undefined;
  }
}
