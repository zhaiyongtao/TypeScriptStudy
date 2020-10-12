var ClassAccessor = /** @class */ (function () {
  function ClassAccessor() {
    this._firstNum = 0;
  }
  Object.defineProperty(ClassAccessor.prototype, "firstNum", {
    get: function () {
      return this._firstNum;
    },
    set: function (num) {
      this._firstNum = num;
    },
    enumerable: true,
    configurable: true,
  });
  return ClassAccessor;
})();
var test = new ClassAccessor();
console.log(1);
test.firstNum = 12;
console.log(test.firstNum);
