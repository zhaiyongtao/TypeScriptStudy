/**
 * jquery 类型定义文件/类型描述文件
 */

// 定义全局变量
//  declare var $:(params: () => void) => void

// 定义全局函数
interface JqueryInstance {
    html: (html: string) => JqueryInstance
}
// 定义全局函数的时候一个重载的概念，也就是说同一个全局函数可以定义多次，可以根据你传的参数不同选择不同的函数定义
declare function $(readyFunc: () => void): void;
declare function $(params:string) : JqueryInstance;
