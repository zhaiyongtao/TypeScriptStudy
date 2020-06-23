"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var zytAnalyzer_1 = __importDefault(require("./zytAnalyzer"));
var crowller_1 = __importDefault(require("./crowller"));
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send("\n      <html>\n        <body>\n          <form method=\"post\" action=\"/getData\">\n            <input type=\"password\" name=\"password\" />\n            <button>\u63D0\u4EA4</button>\n          </form>\n        </body>\n      </html>\n    ");
});
router.post('/getData', function (req, res) {
    if (req.body.password === '123') {
        var secret = 'secretKey';
        var url = "http://www.dell-lee.com/typescript/demo.html?secret=" + secret;
        var analyzer = zytAnalyzer_1.default.getInstance();
        new crowller_1.default(analyzer, url);
        res.send('getData Success!');
    }
    else {
        res.send('password Error!');
    }
});
exports.default = router;
