import { lazy } from 'react';

export const Main = lazy(() => import('./main'));
export const Login = lazy(() => import('./login'));
export const Write = lazy(() => import('./board/write'));
export const Test = lazy(() => import('./test'));
