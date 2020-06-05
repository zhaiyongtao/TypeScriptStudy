import superagent from "superagent";
import path from "path";
import fs from 'fs';

export interface Analyzer {
    analyze: (html: string, filePath: string) => string;
  }
  
 export default class Crowller {
    private filePath = path.resolve(__dirname, '../data/course.json');
    async getRawHtml() {
        const result: superagent.Response = await superagent.get(this.url);
        return result.text
    }
    writeFile(content: string) {
        fs.writeFileSync(this.filePath,content);
      }
    
    async initSpiderProcess () {
        const html = await this.getRawHtml()
        const fileContent =  this.analyzer.analyze(html, this.filePath);
            this.writeFile(fileContent)
    }
    // private analyzer;
    // constructor (analyzer) {
    //     this.analyzer = analyzer
    // }
    constructor(private analyzer:any,private url:string) {
        this.initSpiderProcess();
    }
}

// 方法类实例化，使用实例化对象中的方法

console.log(1)