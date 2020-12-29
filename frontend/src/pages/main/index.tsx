import React from 'react';
import { GlobalComponent, Header, Footer, Menu } from 'components';

import Presenter from './presenter';

function Main() {
  return (
    <GlobalComponent header={<Header />} footer={<Footer />} menu={<Menu />}>
      <Presenter />
    </GlobalComponent>
  );
}

export default Main;
