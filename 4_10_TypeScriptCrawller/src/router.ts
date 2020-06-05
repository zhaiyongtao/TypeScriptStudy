import {Router,Request,Response} from 'express'
import zytAnalyzer from './zytAnalyzer';

import Crowller from './crowller'
const router = Router();
router.get('/',(req:Request,res:Response) => {
    res.send("hello world!")
});

router.get('/getData',(req:Request,res:Response) => {
    const secret = "secretKey";
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
const analyzer = zytAnalyzer.getInstance (); 
new Crowller(analyzer,url);

    res.send("send success")
});

export default router