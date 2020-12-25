import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Store, { RootStore } from 'stores';
import { IU } from 'assets/images';

type Props = {};
import 'assets/styles';

function Presenter({}: Props) {
  const history = useHistory();

  const { userStore } = Store.useContainer() as RootStore;

  useEffect(() => {}, []);

  return <img src={IU}></img>;
}

export default Presenter;
