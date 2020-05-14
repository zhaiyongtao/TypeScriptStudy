interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

function animal1(x: Bird | Dog) {
  // x.fly()
  if (x.fly) {
    (x as Bird).sing();
  } else {
    (x as Dog).bark();
  }
}

function animal2(x: Bird | Dog) {
    // x.fly()
    if ('sing' in x) {
        x.sing()
    }else {
        x.bark()
    }
}

function add1 (x: string | number, y: string | number) {
    if (typeof(x) === 'string' || typeof(y) === 'string') {
        return `${x}${y}`
    } else {
        return x + y
    }
}

class NumberObj {
    count : number;
}


function add2 (x: object | NumberObj, y: object | NumberObj) {
  if (x instanceof NumberObj && y instanceof NumberObj) {
      return x.count + y.count
  } else {
      return 0;
  }
}