import { Request, Response } from 'express';
import { excuteQuery, makeResultMessage, QueryResult } from '../common';

import { Post } from './types';

export const getPosts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const result = await excuteQuery('SELECT * FROM posts');
  return res.json(result);
};

export const getPost = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params.postId;
  const result = await excuteQuery('SELECT * FROM posts WHERE id = ?', [id]);
  return res.json(result);
};

export const createPost = async (req: Request, res: Response) => {
  console.log('req123', req.user);
  const newPost: Post = req.body;
  console.log('newPost', newPost);
  const test = {
    title: 'test',
    contents: newPost.contents,
  };
  const result = await excuteQuery('INSERT INTO posts SET ?', [test]);
  const message = makeResultMessage('Post Create', result as QueryResult);
  return res.json(message);
};

export const deletePost = async (req: Request, res: Response) => {
  const id = req.params.postId;
  const result = await excuteQuery('DELETE FROM posts WHERE id = ?', [id]);
  const message = makeResultMessage('Post Delete', result as QueryResult);
  return res.json(message);
};

export const updatePost = async (req: Request, res: Response) => {
  const id = req.params.postId;
  const updatePost: Post = req.body;
  const result = await excuteQuery('UPDATE posts SET ? WHERE id = ?', [
    updatePost,
    id,
  ]);
  const message = makeResultMessage('Post Update', result as QueryResult);
  return res.json(message);
};
