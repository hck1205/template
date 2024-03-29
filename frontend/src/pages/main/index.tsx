import React from 'react';
import {
  LayoutComponent,
  SearchBar,
  Footer,
  SlideSideNav,
  SideNav,
  Menu,
} from 'components';

import Presenter from './presenter';

function Main() {
  return (
    <LayoutComponent
      sideMenu={<SideNav />}
      slideSideNav={<SlideSideNav />}
      searchBar={<SearchBar />}
      footer={<Footer />}
    >
      <Presenter />
    </LayoutComponent>
  );
}

export default Main;
