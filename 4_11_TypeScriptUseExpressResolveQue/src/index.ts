import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session'
import router from './router';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
  name: 'session',
  keys: ['zyt'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use((req: Request, res: Response, next: NextFunction) => {
  req.teacherName = 'zyt';
  next();
});
app.use(router);

app.listen(7002, () => {
  console.log('server is running');
});

