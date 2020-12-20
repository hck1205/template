import { RowDataPacket } from 'mysql2';
import { excuteQuery } from '../controllers/common';
import { User } from '../controllers/auth/types';

const passport = require('passport');
const local = require('./local');

export default () => {
  passport.serializeUser(({ userId }: User, done: Function) => {
    // 서버쪽에 [{ id: 3, cookie: '#$%!@#SDRWERWER@#$WER' }]
    return done(null, userId);
  });

  passport.deserializeUser(async ({ userId }: User, done: Function) => {
    try {
      const [user] = (await excuteQuery('SELECT * FROM user WHERE userId = ?', [
        userId,
      ])) as RowDataPacket[];

      return done(null, user); // req.user에 저장됨
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });

  local();
};
