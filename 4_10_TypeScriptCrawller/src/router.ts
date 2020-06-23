import {Router,Request,Response} from 'express'
import zytAnalyzer from './zytAnalyzer';

import Crowller from './crowller'
const router = Router();
router.get('/', (req: Request, res: Response) => {
    res.send(`
      <html>
        <body>
          <form method="post" action="/getData">
            <input type="password" name="password" />
            <button>提交</button>
          </form>
        </body>
      </html>
    `);
  });

  router.post('/getData', (req: Request, res: Response) => {
    if (req.body.password === '123') {
      const secret = 'secretKey';
      const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
      const analyzer = zytAnalyzer.getInstance();
      new Crowller(analyzer,url );
      res.send('getData Success!');
    } else {
      res.send('password Error!');
    }
  });
  

export default router