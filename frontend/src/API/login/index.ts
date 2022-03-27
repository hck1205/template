import { client } from 'lib';

export const signin = async (params: { userId: string; password: string }) => {
  const user = {
    user_id: params.userId,
    password: params.password,
  };

  return await client.post('auth/signin', user);
};

export const getAuthProfile = async () => {
  return await client.get('auth/profile');
};
