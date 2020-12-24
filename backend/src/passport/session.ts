import { Application } from 'express';
import expressSession from 'express-session';

import { DB_ACESS_INFO, SERVE_MODE } from '../constpack';

const MySQLStore = require('express-mysql-session')(expressSession);

export default (app: Application) => {
  app.use(
    expressSession({
      secret: process.env.COOKIE_SECRET as string,
      resave: false, // 매번 세션 강제 저장
      saveUninitialized: true, // 빈 값도 저장
      cookie: {
        httpOnly: true, // javscript로 쿠키에 접근하지 못하도록 하는 secure방식
        secure: false, // https를 쓸 때 true
      },
      store: new MySQLStore({
        ...DB_ACESS_INFO[SERVE_MODE],
      }), // 서버가 재시작되면 메모리에 있는 데이터가 없어지기 때문에 유저들의 로그인이 풀림 그렇기 때문에 store옵셥을 넣어서 레디스같은 memcached db를 이용해 그것을 방지함
    })
  );
};
