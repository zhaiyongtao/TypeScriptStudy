"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crowller_1 = __importDefault(require("./utils/crowller"));
var analyzer_1 = __importDefault(require("./utils/analyzer"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var util_1 = require("./utils/util");
// 检查是否登录中间件
var checkLogin = function (req, res, next) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        next();
    }
    else {
        res.json(util_1.getResponseData(null, '请先登录'));
    }
};
var router = express_1.Router();
router.get('/', function (req, res) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send("\n      <html>\n        <body>\n          <a href='/getData'>\u722C\u53D6\u5185\u5BB9</a>\n          <a href='/showData'>\u5C55\u793A\u5185\u5BB9</a>\n          <a href='/logout'>\u9000\u51FA</a>\n        </body>\n      </html>\n    ");
    }
    else {
        res.send("\n      <html>\n        <body>\n          <form method=\"post\" action=\"/login\">\n            <input type=\"password\" name=\"password\" />\n            <button>\u767B\u9646</button>\n          </form>\n        </body>\n      </html>\n    ");
    }
});
router.get('/logout', function (req, res) {
    if (req.session) {
        req.session.login = undefined;
    }
    res.json(util_1.getResponseData(true));
});
router.post('/login', function (req, res) {
    // const { password } = req.body;
    // const isLogin = req.session ? req.session.login : false;
    // if (isLogin) {
    //   res.send('已经登陆过');
    // } else {
    //   if (password === '123' && req.session) {
    //     req.session.login = true;
    //     res.send('登陆成功');
    //   } else {
    //     res.send('登陆失败');
    //   }
    // }
    var password = req.body.password;
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.json(util_1.getResponseData(false, '已经登陆过'));
    }
    else {
        if (password === '123' && req.session) {
            req.session.login = true;
            res.json(util_1.getResponseData(true));
        }
        else {
            res.json(util_1.getResponseData(false, '登陆失败'));
        }
    }
});
router.get('/getData', function (req, res) {
    // const isLogin = req.session ? req.session.login : false;
    // if (isLogin) {
    //   const secret = 'secretKey';
    //   const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    //   const analyzer = Analyzer.getInstance();
    //   new Crowller(url, analyzer);
    //   res.send('getData Success!');
    // } else {
    //   res.send('请登陆后爬取内容');
    // }
    var secret = 'secretKey';
    var url = "http://www.dell-lee.com/typescript/demo.html?secret=" + secret;
    var analyzer = analyzer_1.default.getInstance();
    new crowller_1.default(url, analyzer);
    res.json(util_1.getResponseData(true));
});
router.get('/showData', function (req, res) {
    // const isLogin = req.session ? req.session.login : false;
    // if (isLogin) {
    //   try {
    //     const position = path.resolve(__dirname, '../data/course.json');
    //     const result = fs.readFileSync(position, 'utf8');
    //     res.json(JSON.parse(result));
    //   } catch (e) {
    //     res.send('尚未爬取到内容');
    //   }
    // } else {
    //   res.send('请登陆后查看内容');
    // }
    try {
        var position = path_1.default.resolve(__dirname, '../data/course.json');
        var result = fs_1.default.readFileSync(position, 'utf8');
        res.json(util_1.getResponseData(JSON.parse(result)));
    }
    catch (e) {
        res.json(util_1.getResponseData(false, '数据不存在'));
    }
});
exports.default = router;
