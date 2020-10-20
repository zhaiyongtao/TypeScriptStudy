function nameDecorator (target: any, key: any):any {
    console.info('target', target);
    console.info('key', key);
    const descriptor: PropertyDescriptor = {
        writable: true
    }
    return descriptor
}

function nameModifiedDecorator (target: any, key: any):any {
    target[key] = '123'; // 修改的是实例原型上面的name属性和实例上的name属性没有关系
}

class AttributeDecorator {
    @nameDecorator
    @nameModifiedDecorator
    name = 'zyt'
}
const test = new AttributeDecorator()
// test.name 可以修改，可以通过装饰器返回一个descriptor对象 writable: false 来控制
test.name = 'Buzz LightYear' // 修改的是实例上的name属性

console.log(test.name)
console.log((test as any).__proto__.name)