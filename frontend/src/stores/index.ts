import { createContainer } from 'unstated-next';

import userStore, { UserStore } from './user';

export type RootStore = {
  userStore: UserStore;
};

const composeHooks = (...hooks: Function[]) => () =>
  hooks.reduce((acc, hook) => ({ ...acc, ...hook() }), {});

export default createContainer(composeHooks(userStore));
