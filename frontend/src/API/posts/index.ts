import { client } from 'lib';

export const registerPost = async (params: {
  type: string;
  contents: string;
  title: string;
}) => {
  return await client.post('posts/register', params);
};
