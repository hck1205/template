import { client } from 'lib';

export const signin = async (params: { userId: string; password: string }) => {
  return await client.post('auth/signin', params);
};

export const getAuthProfile = async () => {
  return await client.get('auth/profile');
};
