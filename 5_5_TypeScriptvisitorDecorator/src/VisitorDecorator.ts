// 方法装饰器
// 必要的两个参数
// target
// 普通方法，target 对应的是类的 prototype(原型)
// 静态方法，target 对应的是类的构造函数
// key
// 装饰的方法的名字
// 第三个参数（可选）
//descriptor与js的原生方法 object.descriptor 类似
function getNameDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  console.log("target", target);
  console.log("key", key);
  console.info(descriptor);
//   descriptor.writable = true // 报错Cannot both specify accessors and a value or writable attribute
}

class VisitorDecorator {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

//   @getNameDecorator
  get name() {
    return this._name;
  }

  @getNameDecorator
  set name(name) {
    this._name = name;
  }
}

const test = new VisitorDecorator("zyt");
console.info("normalFun", test.name);
