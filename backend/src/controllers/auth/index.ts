import { NextFunction, Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import bcrypt from 'bcrypt';

import { excuteQuery, makeResultMessage, QueryResult } from '../common';
import { User } from './types';

const passport = require('passport');

export const signup = async (req: Request, res: Response) => {
  const user: User = req.body;
  const [
    { cnt },
  ] = (await excuteQuery('SELECT COUNT(*) as cnt FROM user WHERE userId = ?', [
    user.userId,
  ])) as RowDataPacket[];

  if (cnt) {
    res.send('User Already Exists');
  } else {
    const newUser = {
      ...user,
      password: await bcrypt.hash(user.password, 12),
    };

    const result = await excuteQuery('INSERT INTO user SET ?', [newUser]);
    const message = makeResultMessage('User Registered', result as QueryResult);

    return res.send(message);
  }
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate(
    'local',
    (err: Error, user: User, info: { reason: string }) => {
      if (err) {
        console.error(err);
        return next(err);
      }

      console.log('signin');

      if (info) {
        return res.status(401).send(info.reason);
      }

      return req.login(user, async (loginErr) => {
        try {
          if (loginErr) return next(loginErr);

          const [
            fullUser,
          ] = (await excuteQuery(
            'SELECT userId, nickname, email FROM user WHERE id = ?',
            [user.id]
          )) as RowDataPacket[];

          return res.json(fullUser);
        } catch (e) {
          next(e);
        }
      });
    }
  )(req, res, next);
};

export const profile = async (req: Request, res: Response) => {
  res.send('profile');
};
