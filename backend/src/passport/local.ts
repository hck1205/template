import bcrypt from 'bcrypt';
import { RowDataPacket } from 'mysql2';
import { excuteQuery } from '../controllers/common';

const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'userId',
        passwordField: 'password',
      },
      async (userId: string, password: string, done: Function) => {
        try {
          const [
            user,
          ] = (await excuteQuery('SELECT * FROM user WHERE userId = ?', [
            userId,
          ])) as RowDataPacket[];

          if (!user) {
            return done(null, false, { reason: '존재하지 않는 사용자입니다!' });
          }

          const result = await bcrypt.compare(password, user.password);

          if (result) {
            return done(null, user);
          }

          // 첫번째 param은 서버에러 현재는 'null'
          return done(null, false, { reason: '비밀번호가 틀립니다.' });
        } catch (e) {
          console.error(e);
          return done(e);
        }
      }
    )
  );
};
