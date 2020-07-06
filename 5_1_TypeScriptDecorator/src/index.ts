/**
 * index - 类装饰器的学习与使用
 * @Author: BuzzLightyear.Z <yongtao.di@hand-china.com>
 * @Date: 2020/7/6 11:26 上午
 * @LastEditTime: 2020/7/6 11:26 上午
 * @Copyright: Copyright (c) 2020, Hand
 */

// 类的装饰器，对类进行修饰
// 类的装饰器本身是一个函数
// 装饰器通过 @ 符号来使用
// 类的装饰器是接收的参数是类的构造函数

// 类的构造函数是装饰类的 ，那么它接收到参数就是类的构造函数
// 第一种写法
// function testDecorator(constructor: any) {
//     constructor.prototype.getName = () => {
//         console.log('zyt')
//     }
//     console.info('testDecorator')
// }
// 第二种写法
// 便于传参
function testDecorator() {
    return function (constructor: any) {
        constructor.prototype.getName = () => {
            console.log('zyt')
        }
        console.info('testDecorator')
    }
}

// function testDecorator1(constructor: any) {
//
//     console.info('testDecorator1')
// }

// 装饰器的收集顺序 上 -> 下； 左 -> 右
// 装饰器的执行顺序 下 -> 上； 右 -> 左
// @testDecorator
// @testDecorator1
@testDecorator()
class TypeScriptDeTest {

}

// 类的装饰器不是在类被实例化的时候执行
// 而是在类被定义的那一刻执行，从而开始对类进行修改
let test = new TypeScriptDeTest();
// 装饰器testDecorator可以获取类TypeScriptDeTest的构造函数，对构造函数进行修改，从而对类进行修改
(test as any).getName()