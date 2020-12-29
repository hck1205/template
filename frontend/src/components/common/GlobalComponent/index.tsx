import React from 'react';

type Props = {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  menu?: React.ReactNode;
};

function GlobalComponent({ header, children, footer, menu }: Props) {
  return (
    <>
      {header}
      {menu}
      <div>{children}</div>
      {footer}
    </>
  );
}

export default GlobalComponent;
