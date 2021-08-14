import { lazy } from 'react';

export const Main = lazy(() => import('./main'));
export const Login = lazy(() => import('./login'));
export const BoardList = lazy(() => import('./board/list'));
export const BoardWrite = lazy(() => import('./board/write'));
export const Test = lazy(() => import('./test'));
