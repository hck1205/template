import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from 'components';

import { RoutesPath, Routes } from 'lib';

export default function App() {
  // const {userStore} = Store.useContainer() as RootStore;
  const [appReady, setAppReady] = useState(false);

  // const {loggedIn} = userStore;

  useEffect(() => {
    setAppReady(true);
  }, []);

  return appReady ? (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          {RoutesPath.map(({ path, page, exact, isPrivate }: Routes, i) => {
            if (isPrivate) {
              return (
                <PrivateRoute
                  exact={exact}
                  path={path}
                  component={page}
                  key={`private_${path}_${i}`}
                />
              );
            }

            return (
              <Route
                exact={exact}
                path={path}
                component={page}
                key={`public_${path}_${i}`}
              />
            );
          })}
        </Switch>
      </Suspense>
    </Router>
  ) : null;
}
