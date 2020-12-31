import React, { useEffect } from 'react';

import { handleRouter } from 'lib';

import { IU } from 'assets/images';

type Props = {};

function Presenter({}: Props) {
  const history = handleRouter();

  useEffect(() => {}, []);

  return (
    <div>
      <img
        src={IU}
        onClick={() => {
          history.push('/test');
        }}
      />
    </div>
  );
}

export default Presenter;
