import bcrypt from 'bcrypt';
import { RowDataPacket } from 'mysql2';
import { excuteQuery } from '../controllers/common';

const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

export default () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'user_id',
        passwordField: 'password',
      },
      async (user_id: string, password: string, done: Function) => {
        try {
          const [user] = (await excuteQuery(
            'SELECT * FROM user WHERE user_id = ?',
            [user_id]
          )) as RowDataPacket[];

          if (!user) {
            return done(null, false, { reason: '존재하지 않는 사용자입니다!' });
          }

          const result = await bcrypt.compare(password, user.password);

          if (result) {
            console.log('LocalStrategy');
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
