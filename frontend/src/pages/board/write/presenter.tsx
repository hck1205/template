import React, { useEffect } from 'react';
import { Editor } from 'components';

import { handleRouter } from 'lib';

import './style.scss';

type Props = {};

function Presenter({}: Props) {
  useEffect(() => {}, []);

  return (
    <>
      <Editor />
    </>
  );
}

export default Presenter;
