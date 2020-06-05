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
    res.send("hello world!");
});
router.get('/getData', function (req, res) {
    var secret = "secretKey";
    var url = "http://www.dell-lee.com/typescript/demo.html?secret=" + secret;
    var analyzer = zytAnalyzer_1.default.getInstance();
    new crowller_1.default(analyzer, url);
    res.send("send success");
});
exports.default = router;
