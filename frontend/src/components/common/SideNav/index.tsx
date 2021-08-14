import React from 'react';
import { Menu } from 'components';
import { FLEX_COLUMN } from 'components/styles';
import styled from '@emotion/styled';

function SideMenu() {
  return (
    <SideNavWrapper>
      <Content>
        <Logo>SOME LOGO</Logo>
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
      </Content>
    </SideNavWrapper>
  );
}

export default SideMenu;

const SideNavWrapper = styled.div`
  width: 200px;
`;

const Content = styled.div`
  ${FLEX_COLUMN}
`;

const Logo = styled.div`
  height: 58px;
  width: 100%;
  background-color: #282c37;
`;

const MenuWrapper = styled.div`
  width: 100%;
`;
