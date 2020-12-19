import React, { useEffect } from 'react';

import { IU } from 'assets/images';

type Props = {};
import 'assets/styles';

function Presenter({}: Props) {
  useEffect(() => {}, []);

  return <img src={IU}></img>;
}

export default Presenter;
