import React from 'react';
import { LayoutComponent, SearchBar, Footer, SideNav } from 'components';

import Presenter from './presenter';

function Main() {
  return (
    <LayoutComponent
      sideNav={<SideNav />}
      searchBar={<SearchBar />}
      footer={<Footer />}
    >
      <Presenter />
    </LayoutComponent>
  );
}

export default Main;
