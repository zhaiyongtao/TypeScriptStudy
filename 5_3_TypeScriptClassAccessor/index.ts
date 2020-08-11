class ClassAccessor {
  private _firstNum: number = 0;

  get firstNum(): number {
    return this._firstNum;
  }
  set firstNum(num: number) {
    this._firstNum = num;
  }
}

const test = new ClassAccessor()
console.log(1)
test.firstNum = 12;
console.log(test.firstNum)