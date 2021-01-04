import { createContainer } from 'unstated-next';

import userStore, { UserStore } from './user';
import commonStore, { CommonStore } from './common';

export type RootStore = {
  userStore: UserStore;
  commonStore: CommonStore;
};

const composeHooks = (...hooks: Function[]) => () =>
  hooks.reduce((acc, hook) => ({ ...acc, ...hook() }), {});

export default createContainer(composeHooks(userStore, commonStore));
