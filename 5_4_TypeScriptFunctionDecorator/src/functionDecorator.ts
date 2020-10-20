// 方法装饰器
// 必要的两个参数
    // target
        // 普通方法，target 对应的是类的 prototype(原型)
        // 静态方法，target 对应的是类的构造函数
    // key
        // 装饰的方法的名字
// 第三个参数（可选）
    //descriptor与js的原生方法 object.descriptor 类似
function getNameDecorator (target:any, key: string,descriptor: PropertyDescriptor) {
    console.log('target',target)
    console.log('key',key)
    // descriptor.writable = false
    console.info(descriptor)
    descriptor.value = () => {
        console.log('descriptor.value')
    }
}

class FunctionDecorator {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    @getNameDecorator
    getName() {
        return this.name
    }
    @getNameDecorator
    static getName() {
        return 1234
    }
}


const test = new FunctionDecorator('zyt')
// 当getName的装饰器中descriptor变量的writable属性被定义为false的时候，该方法不可以被重写
test.getName = () => {
    console.log('rewrite', 'zyt22')
    return 'zyt22'
}
console.info('normalFun',test.getName())
console.info('staticFun',FunctionDecorator.getName()
)
