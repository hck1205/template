import React from 'react';
import { LayoutComponent, SearchBar, Footer, SlideSideNav } from 'components';

import Presenter from './presenter';

function Write() {
  return (
    <LayoutComponent
      slideSideNav={<SlideSideNav />}
      searchBar={<SearchBar />}
      footer={<Footer />}
    >
      <Presenter />
    </LayoutComponent>
  );
}

export default Write;
