// global.d.ts
export {};

declare global {

  type AppTheme = typeof import('@app/theme').lightTheme | typeof import('@app/theme').darkTheme;

  type User = {
    id: string;
    name: string;
    email: string;
  };


}