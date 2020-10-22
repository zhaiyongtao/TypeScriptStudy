/**
 * index$ - 对reflect-metadata的使用，以及观察装饰器的执行顺序
 * @Author: BuzzLightyear.Z
 * @Email: yongtao.di@hand-china.com
 * @Date: 2020/10/22 11:07 上午
 * @LastEditTime: 2020/10/22 11:07 上午
 * @Copyright: Copyright (c) 2020, Hand
 */

import 'reflect-metadata'

//target -》 构造函数
// 构造函数的原型链上具有类的方法
function showData(target: typeof User) {
    console.info('target.prototype',target.prototype) // User { getName: [Function], getAge: [Function] }

    for (let key in target.prototype) {
        const data = Reflect.getMetadata('data', target.prototype, key);
        console.log(data)
    }
}
// target -> 类的 prototype(原型)
function setData(dataKey:string, msg:string) {
    return function (target: User, key:string) {
        console.info('target',target) // User { getName: [Function], getAge: [Function] }
        console.info('key',key)
        Reflect.defineMetadata(dataKey,msg, target, key)
    }
}

@showData
class User {

    @setData('data', 'name')
    getName() {}

    @setData('data', 'age')
    getAge() {}
}