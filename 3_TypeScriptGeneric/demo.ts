// 泛型变量

function join<ABC>(x:ABC,y:ABC){
    console.info(`${x}${y}`)
    return `${x}${y}`
}

join<string>('1','2')
// 类型推断 ABC => string,编译器会根据传入的参数自动地帮助我们确定ABC的类型
join('1','2')

function joinOther <T,P> (x:T,y:P) {
    console.info(`${x}${y}`)
}

joinOther<string,number>('x',1)

function joinAnother<T>(x: T):T {
    return x
}

joinAnother<number>(1)

//创建可重用的组件，一个组件可以支持多种类型的数据

function loggingIdentity1<T>(arg: T[]): T[] {
    console.log(arg.length); 
    return arg;
}

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  
    return arg;
}

// 泛型接口

interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

// 泛型类 
//泛型类看上去与泛型接口差不多。 泛型类使用（ <>）括起泛型类型，跟在类名后面。

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
//GenericNumber类的使用是十分直观的，并且你可能已经注意到了，没有什么去限制它只能使用number类型。 也可以使用字符串或其它更复杂的类型。

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
//与接口一样，直接把泛型类型放在类后面，可以帮助我们确认类的所有属性都在使用相同的类型。

//我们在类那节说过，类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型


// 泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}   