import * as P from 'pages';

const routes = [
  {
    path: ['/'],
    page: P.Main,
    exact: true,
  },
  {
    path: ['/login'],
    page: P.Login,
    exact: true,
  },
];

export default routes;
