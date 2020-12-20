import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import passportConfig from './passport';

// Routes
import { AuthRouter, PostRouter } from './routes';

const passport = require('passport');
const MySQLStore = require('express-mysql-session')(expressSession);

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    dotenv.config({ path: `${__dirname}/.env` });
    passportConfig();

    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
  }

  middlewares() {
    console.log('process.env.COOKIE_SECRET', process.env.COOKIE_SECRET);
    this.app.use(express.json()); // json 형식의 본문을 처리
    this.app.use(
      // form으로 들어오는 데이터를 처리
      express.urlencoded({
        extended: true,
      })
    );
    this.app.use(morgan('dev'));
    this.app.use('/', express.static('public')); // express 에서 제공하는 middleware로 지정을하면 외부에서 폴더를 노출시켜 접근 가능하게 해준다
    this.app.use(
      cors({
        origin: true,
        credentials: true, // cors && axios 둘다 설정을 해줘야함
      })
    );
    this.app.use(cookieParser(process.env.COOKIE_SECRET));
    this.app.use(
      expressSession({
        secret: process.env.COOKIE_SECRET as string,
        resave: false, // 매번 세션 강제 저장
        saveUninitialized: true, // 빈 값도 저장
        cookie: {
          httpOnly: true, // javscript로 쿠키에 접근하지 못하도록 하는 secure방식
          secure: false, // https를 쓸 때 true
        },
        store: new MySQLStore({
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT as string),
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
        }), // 서버가 재시작되면 메모리에 있는 데이터가 없어지기 때문에 유저들의 로그인이 풀림 그렇기 때문에 store옵셥을 넣어서 레디스같은 memcached db를 이용해 그것을 방지함
      })
    );
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  routes() {
    this.app.use('/api/v1/auth', AuthRouter);
    this.app.use('/api/v1/posts', PostRouter);
  }

  async listen() {
    await this.app.listen(this.app.get('port'));
    console.log('Server on Port', this.app.get('port'));
  }
}
