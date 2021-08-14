import React from 'react';
import {
  LayoutComponent,
  SearchBar,
  Footer,
  SlideSideNav,
  SideNav,
} from 'components';

import Presenter from './presenter';

function BoardList() {
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

export default BoardList;
