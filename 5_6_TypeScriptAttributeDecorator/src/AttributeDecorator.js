function nameDecorator(target, key) {
    console.info('target', target);
    console.info('key', key);
    console.info('', target[key]);
}
var AttributeDecorator = /** @class */ (function () {
    function AttributeDecorator() {
        // @nameDecorator
        this.name = 'zyt';
    }
    return AttributeDecorator;
}());
var test = new AttributeDecorator();
test.name = 'Buzz LightYear';
console.log(test.name);
