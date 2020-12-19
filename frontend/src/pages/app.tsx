import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { routes } from 'lib';

import 'assets/styles';

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          {routes.map(({ path, page, exact }, i) => (
            <Route
              exact={exact}
              path={path}
              component={page}
              key={`${path}_${i}`}
            />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}
