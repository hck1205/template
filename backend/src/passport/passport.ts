import { Application } from 'express';
import { RowDataPacket } from 'mysql2';
import { excuteQuery } from '../controllers/common';
import { User } from '../controllers/auth/types';
import local from './local';

const passport = require('passport');

export default (app: Application) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(({ id }: User, done: Function) => {
    // [{ id: 3, cookie: '#$%!@#SDRWERWER@#$WER' }]
    // 1. id는 서버쪽에서 Kepp
    // 2. cookie는 클라이언트가 가지고 서버에 요청을 함
    // 3. 서버는 쿠키와 일치하는 아이디를 찾아 deserialize해서 정보를 찾아줌
    return done(null, id);
  });

  passport.deserializeUser(async (id: number, done: Function) => {
    try {
      const [user] = (await excuteQuery('SELECT * FROM user WHERE id = ?', [
        id,
      ])) as RowDataPacket[];

      return done(null, user); // req.user에 저장됨
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });

  local();
};
