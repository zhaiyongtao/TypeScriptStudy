var Teacher = /** @class */ (function () {
    function Teacher(info) {
        this.info = info;
    }
    Teacher.prototype.getInfo = function (key) {
        return this.info[key];
    };
    return Teacher;
}());
var tea = new Teacher({
    name: 'zyt',
    age: 18,
    gender: 'male'
});
console.log(tea.getInfo('name'));
