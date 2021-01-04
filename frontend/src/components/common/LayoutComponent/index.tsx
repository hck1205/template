import React from 'react';

import styled from '@emotion/styled';

type Props = {
  header?: React.ReactNode;
  searchBar?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  sideNav?: React.ReactNode;
};

function LayoutComponent({
  header,
  children,
  footer,
  sideNav,
  searchBar,
}: Props) {
  return (
    <PageWrapper>
      <HeaderWrapper>
        {sideNav}
        <BodyWrapper>
          {searchBar}
          <ContentWrapper>{children}</ContentWrapper>
        </BodyWrapper>
      </HeaderWrapper>
      <FooterWrapper>{footer}</FooterWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ebeef3;
`;

const HeaderWrapper = styled.div`
  display: flex;
`;

const BodyWrapper = styled.div`
  flex-grow: 1;
  min-height: 800px;
`;

const ContentWrapper = styled.div`
  padding: 5px;
`;

const FooterWrapper = styled.div`
  height: 100px;
  border-top: 1px solid #ebeef3;
  background: #fafafa;
  border-bottom: 1px solid #ebeef3;
`;

export default LayoutComponent;
