/**
 * ParamsDecorator$ - 参数装饰器
 * @Author: BuzzLightyear.Z
 * @Email: yongtao.di@hand-china.com
 * @Date: 2020/10/20 5:06 下午
 * @LastEditTime: 2020/10/20 5:06 下午
 * @Copyright: Copyright (c) 2020, Hand
 */

function paramsDecorator (target: any, method: any, paramIndx: number):any {
    console.info('target', target);
    console.info('method', method);
    console.info('paramIndx', paramIndx);
}

class AttributeDecorator {
    // 类的函数声明
    getInfo (name: string, @paramsDecorator age: number) {
        console.log(name, age);
    }
}
const test = new AttributeDecorator()
test.getInfo('zyt', 26)

