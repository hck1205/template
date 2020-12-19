import { useState, Dispatch } from 'react';

export type UserStore = {
  userName: string;
  setUserName: Dispatch<React.SetStateAction<string>>;
};

function userStore() {
  let [userName, setUserName] = useState('');

  return {
    userStore: {
      userName,
      setUserName,
    },
  };
}

export default userStore;
