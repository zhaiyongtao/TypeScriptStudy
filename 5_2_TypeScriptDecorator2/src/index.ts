/**
 * index - 类装饰器的学习与使用
 * @Author: BuzzLightyear.Z <yongtao.di@hand-china.com>
 * @Date: 2020/7/6 11:26 上午
 * @LastEditTime: 2020/7/6 11:26 上午
 * @Copyright: Copyright (c) 2020, Hand
 */

// 装饰器工厂
// 重载构造函数
// 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数；
// 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明；

function testDecorator() {
  return  function <T extends new (...args: any[]) => any>(constructor: T) {
      //  把类的构造函数作为参数传入，并修改构造函数
        return class extends constructor {
            // 修改当前类的构造函数
            name = 'zyt'
            getName() {
                return this.name;
            }
        }
    }
}
const Test = testDecorator () (
    class  {
        name: string;
        constructor(name: string) {
            this.name = name
        }
    }
)

const test = new Test('zyt')
test.getName();
console.log(test.getName())


function testDecorator2() {
    return  function <T extends new (...args: any[]) => any>(constructor: T) {
        //  把类的构造函数作为参数传入，并修改构造函数
        return class extends constructor {
            // 修改当前类的构造函数
            name = 'zyt'
            getName() {
                return this.name;
            }
        }
    }
}

@testDecorator2()
class Test2 {
    name:string
    constructor(name:string) {
        this.name = name
    }
    getData() {
        return this.name
    }
}



const test2 = new Test2('zyt1')
console.log(test2.getData())