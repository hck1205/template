import { useState, Dispatch, SetStateAction } from 'react';

export type User = {
  userId: string;
  nickname: string;
  email: string;
};

export type UserStore = {
  user: User;
  setUser: Dispatch<SetStateAction<string>>;
};

function userStore() {
  let [user, setUser] = useState('');

  return {
    userStore: {
      user,
      setUser,
    },
  };
}

export default userStore;
