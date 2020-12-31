import React from 'react';

import styled from '@emotion/styled';

type Props = {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  menu?: React.ReactNode;
};

function GlobalComponent({ header, children, footer, menu }: Props) {
  return (
    <Wrapper>
      {menu}
      <ContentWrapper>
        {header}
        <div>{children}</div>
        {footer}
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
`;

export default GlobalComponent;
