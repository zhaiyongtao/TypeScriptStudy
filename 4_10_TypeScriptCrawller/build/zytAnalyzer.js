"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var cheerio_1 = __importDefault(require("cheerio"));
var zytAnalyzer = /** @class */ (function () {
    function zytAnalyzer() {
    }
    zytAnalyzer.getInstance = function () {
        if (!zytAnalyzer.instance) {
            zytAnalyzer.instance = new zytAnalyzer();
        }
        return zytAnalyzer.instance;
    };
    zytAnalyzer.prototype.generateJsonContent = function (courseInfo, filePath) {
        var fileContent = {};
        // 如果已经存在这个文件了 我们就读取这个文件
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, "utf-8"));
            console.info(fileContent);
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    };
    zytAnalyzer.prototype.getCourseInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var courseItems = $(".course-item");
        var courseInfos = [];
        console.log(courseItems.length);
        courseItems.map(function (index, element) {
            var descs = $(element).find(".course-desc");
            var title = descs.eq(0).text();
            var count = parseInt(descs.eq(1).text())
                ? parseInt(descs.eq(1).text())
                : 0;
            courseInfos.push({ title: title, count: count });
        });
        return {
            time: new Date().getTime(),
            data: courseInfos,
        };
    };
    zytAnalyzer.prototype.analyze = function (html, filePath) {
        var courseInfo = this.getCourseInfo(html);
        var fileContent = this.generateJsonContent(courseInfo, filePath);
        return JSON.stringify(fileContent);
    };
    return zytAnalyzer;
}());
exports.default = zytAnalyzer;
