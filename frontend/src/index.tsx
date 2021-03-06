import React from 'react';
import ReactDOM from 'react-dom';

import RootStore from 'stores';

import App from './pages/app';

import 'assets/styles';

ReactDOM.render(
  <RootStore.Provider>
    <App />
  </RootStore.Provider>,
  document.getElementById('root')
);
