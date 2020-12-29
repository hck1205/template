import { useState, Dispatch, SetStateAction } from 'react';

export type User = {
  userId: string;
  nickname: string;
  email: string;
};

export type UserStore = {
  user: User;
  setUser: Dispatch<SetStateAction<string>>;
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
  setLogin: Function;
};

function userStore() {
  let [user, setUser] = useState<User | null>(null);
  let [loggedIn, setLoggedIn] = useState(false);

  const setLogin = (user: User) => {
    setUser(user);
    setLoggedIn(true);
  };

  return {
    userStore: {
      user,
      setUser,
      setLogin,
      loggedIn,
    },
  };
}

export default userStore;
