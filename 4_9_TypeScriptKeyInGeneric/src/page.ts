interface Person {
  name: string;
  age: number;
  gender: string;
}

// getInfo 传入参数 ‘name’ => T 继承 Person中的类型 => T 此时就和Person中的name类型保持一致
// T 传递的是 类型，而不是具体的某一个值
//  type T = 'name';
// key: 'name';
// Person['name'];

class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}

const tea = new Teacher({
  name: 'zyt',
  age: 18,
  gender: 'male',
});

console.log(tea.getInfo('name'));

type Name = 'name';
// const abc: Name = 'abc' //不能将类型“"abc"”分配给类型“"name"
const bcd : Name = 'name'; //正确

// keyOf 也是类型保护的一种方式