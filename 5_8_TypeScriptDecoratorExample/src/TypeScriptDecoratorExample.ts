/**
 * TypeScriptDecoratorExample$ - 描述
 * @Author: BuzzLightyear.Z
 * @Email: yongtao.di@hand-china.com
 * @Date: 2020/10/21 2:46 下午
 * @LastEditTime: 2020/10/21 2:46 下午
 * @Copyright: Copyright (c) 2020, Hand
 */

const userInfo: any = undefined;

function errorCatchDecorator(msg: string){
    return function (target:any , key: string, descriptor: PropertyDescriptor) {
        const fn = descriptor.value;
        descriptor.value = function () {
            try {
                fn()
            }catch (e) {
                console.log(msg)
            }
        }
    }

}
class Test {
    @errorCatchDecorator('获取员工姓名出错')
    getName() {
        return userInfo.name
    }
    @errorCatchDecorator('获取员工年龄出错')
    getAge() {
        return userInfo.age
    }
}

const test = new Test()
test.getName()
test.getAge()