
// 在html 中可以正常执行，因为这个也是jy语法
console.log(5) //输出 5

// 浏览器不支持直接编译ts语法
const teacher:string = 'zyt'
console.log(teacher) // Uncaught SyntaxError: Missing initializer in const declaration


// 我们可以使用tsc进行代码编译讲ts文件编译成js文件
// 也可以使用parcel对代码进行编译，这样更简便 https://github.com/parcel-bundler/parcel