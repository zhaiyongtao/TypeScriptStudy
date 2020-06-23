"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var body_parser_1 = __importDefault(require("body-parser"));
// 这个地方的顺序的很重要 先注册 app 之后使用app引用router
// 中间件的顺序必须要在引用路由之前
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(router_1.default);
app.listen(7001, function () {
    console.log('server is running');
});
