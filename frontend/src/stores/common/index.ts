import { useState, Dispatch, SetStateAction } from 'react';

export type CommonStore = {
  sideNavStatus: boolean;
  setSideNavStatus: Dispatch<SetStateAction<boolean>>;
};

function CommonStore() {
  let [sideNavStatus, setSideNavStatus] = useState(false);

  return {
    commonStore: {
      sideNavStatus,
      setSideNavStatus,
    },
  };
}

export default CommonStore;
