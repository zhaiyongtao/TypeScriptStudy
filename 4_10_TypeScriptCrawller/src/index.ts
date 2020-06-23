import express,{Request, Response} from 'express'
import router from './router'

import bodyParser from 'body-parser';


// 这个地方的顺序的很重要 先注册 app 之后使用app引用router
// 中间件的顺序必须要在引用路由之前
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)
app.listen(7001, () => {
    console.log('server is running')
})