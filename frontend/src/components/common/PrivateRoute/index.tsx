import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  useHistory,
  useLocation,
} from 'react-router-dom';

import { axios, handleRouter } from 'lib';
import Store, { RootStore } from 'stores';

type Props = {
  exact: boolean;
  path: string | string[];
  component: FunctionComponent<RouteProps>;
};

function PrivateRoute({ exact, path, component: Componment, ...rest }: Props) {
  const history = handleRouter();
  const location = useLocation();

  const { userStore } = Store.useContainer() as RootStore;
  const { loggedIn, setLogin } = userStore;
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    console.log('Private Route');
    if (!loggedIn) {
      axios
        .get('auth/profile')
        .then(({ data }) => {
          if (data) {
            setLogin(data);
          }
        })
        .catch((e) => {
          console.info(e);
          history.push('/login');
        });
    } else {
      setShouldRender(true);
    }
  }, [loggedIn, shouldRender]);

  if (shouldRender) {
    return loggedIn ? (
      <Route
        {...rest}
        render={(props) => {
          return <Componment {...props} />;
        }}
      />
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    );
  } else {
    return null;
  }
}

export default PrivateRoute;
