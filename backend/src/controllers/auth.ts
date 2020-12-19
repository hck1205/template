import { excuteQuery, makeResultMessage, QueryResult } from './common';
import { Request, Response } from 'express';

export const signup = async (req: Request, res: Response) => {
  res.send('signup');
};

export const signin = async (req: Request, res: Response) => {
  res.send('signin');
};

export const profile = async (req: Request, res: Response) => {
  res.send('profile');
};
