import * as P from 'pages';
import { LazyExoticComponent, FunctionComponent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export type Routes = {
  path: string | string[];
  page: LazyExoticComponent<FunctionComponent<{}>>;
  exact: boolean;
  hasMenu?: boolean;
  isPrivate?: boolean;
};

export const handleRouter = () => {
  const history = useHistory();
  const location = useLocation();

  return {
    push: (path: string) => {
      history.push(path, { prevPath: location.pathname });
    },
  };
};

export const RoutesPath: Routes[] = [
  {
    path: ['/'],
    page: P.Main,
    exact: true,
    isPrivate: false,
  },
  {
    path: ['/login'],
    page: P.Login,
    exact: true,
  },
  {
    path: ['/test'],
    page: P.Test,
    exact: true,
    isPrivate: true,
  },
];
