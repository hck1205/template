import React, { useEffect } from 'react';
import { handleRouter } from 'lib';

import Store, { RootStore } from 'stores';

import { IU } from 'assets/images';

type Props = {};

function Presenter({}: Props) {
  const history = handleRouter();

  const { userStore } = Store.useContainer() as RootStore;

  return (
    <>
      <img
        src={IU}
        onClick={() => {
          history.push('/login');
        }}
      />
      <div>test1</div>
    </>
  );
}

export default Presenter;
