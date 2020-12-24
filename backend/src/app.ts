import express, { Application } from 'express';
import cookieParser from 'cookie-parser';

import cors from 'cors';
import morgan from 'morgan';

import { passportConfig, sessionConfig } from './passport';

// Routes
import { AuthRouter, PostRouter } from './routes';

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
  }

  middlewares() {
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
    sessionConfig(this.app);
    passportConfig(this.app);
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
