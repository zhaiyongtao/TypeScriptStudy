/**
 * index - 类装饰器的学习与使用
 * @Author: BuzzLightyear.Z <yongtao.di@hand-china.com>
 * @Date: 2020/7/6 11:26 上午
 * @LastEditTime: 2020/7/6 11:26 上午
 * @Copyright: Copyright (c) 2020, Hand
 */



function testDecorator() {
    // T extends new (...args: any[]) => any  => T可以继承一个构造函数 => T可以通过他所继承的构造函数实例化出来  => T 是一个类
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

// 这个时候testDecorator作为一个工厂函数使用
const Test = testDecorator () (
    class  {
        name: string;
        constructor(name: string) {
            this.name = name
        }
    }
)



function testDecorator2() {
    return  function <T extends new (...args: any[]) => any>(constructor: T) {
        //  把类的构造函数作为参数传入，并修改构造函数
        return class extends constructor {
            // 修改当前类的构造函数
            name = 'zyt'
            getName() {
                return this.name ;
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
}



const test2 = new Test2('zyt2')
// 这个地方为什么要给test2 转换类型？
// 这是Ts在检查代码的时候，发现类里并没有getName这个方法，这个方法是是我们在装饰器里加上的，所以这里不转换类型就会有语法报错
console.log((test2 as any).getName())