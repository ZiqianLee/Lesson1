function logThis() {
    console.log(this ); // 在浏览器中，this指向全局对象window，输出true
}

logThis(); // 在全局作用域中调用，this指向全局对象（在浏览器中是window，在Node.js中是global）

// 定义一个对象obj，包含一个name属性
const obj = {name:'obj1'}
// 为obj对象添加print方法，赋值为logThis函数
obj.print = logThis;

// 定义另一个对象obj2，包含一个name属性
const obj2 = {name:'obj2'}
// 为obj2对象添加print方法，赋值为logThis函数
obj2.print = logThis;

obj.print(); // 在对象作用域中调用，this指向对象obj1
obj2.print(); // 在对象作用域中调用，this指向对象obj2
