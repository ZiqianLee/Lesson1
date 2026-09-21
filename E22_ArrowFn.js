//普通简单函数的写法
function normalFn() {
  console.log("普通函数");
}
normalFn();

//以及改写成立即执行的写法
(function () {
  console.log("立即执行的普通函数");
})();

//改写成函数表达式的写法
const fnExpression = function () {
  console.log("函数表达式");
};
fnExpression();

//再改写成立即执行的函数表达式的写法
(function () {
  console.log("立即执行的函数表达式");
})();

//再写成箭头函数的形式
const arrowFn = () => {
  console.log("箭头函数");
};
arrowFn();

//再写成立即执行的箭头函数的形式
(() => {
  console.log("立即执行的箭头函数");
})();

const arrowAdd = (a, b, c) => a + b + c; // 箭头函数
console.log(arrowAdd(1, 2, 3)); // 输出 6

const normAdd = function (a, b, c) {
  // 普通函数
  return a + b + c;
};
console.log(normAdd(1, 2, 3)); // 输出 6

// 箭头函数和普通函数的主要区别是：
// 1. this的指向机制不同：
//    - 普通函数内部的 this 采用【动态绑定】，在调用时确定，通常指向调用它的对象。
//    - 箭头函数内部【没有自己的 this】，它通过【词法作用域（Lexical Scope）】继承外层执行上下文的 this。
// 2. 箭头函数没有自己的 arguments 对象。
// 3. 箭头函数不能作为构造函数使用（不能通过 new 调用）。
// 4. 箭头函数没有 prototype 原型属性。
// 5. 箭头函数不能作为 Generator 函数使用（不能使用 yield）。

// ==========================================
// 重点深入：为什么在对象内部写箭头函数拿不到对象的属性？
// ==========================================

const obj = {
  name: "slot",
  // 1. 普通函数：调用时作为 obj 的方法（obj.getName()），其 this 隐式绑定到调用者 obj
  getName: function () {
    return this.name;
  },
  // 2. 箭头函数：没有自己的 this，向外层词法作用域查找
  arrowGet: () => this.name,
};

console.log(obj.getName());  // 输出: "slot"
console.log(obj.arrowGet()); // 输出: undefined

/*
【核心原因深度剖析】：
Q: 为什么 arrowGet() 输出 undefined，而不是 "slot"？

1. 对象字面量（Object Literal）的大括号 `{ ... }` 只是声明数据的语法结构，【不是作用域】！
   - JavaScript 中的作用域只有：全局作用域、函数作用域、块级作用域（let/const 在 if/for/{} 等代码块中产生）。
   - 对象的 `{}` 根本不会创建块级作用域，更不会创建词法环境！

2. 箭头函数是在何处被“定义”的？
   - 因为 obj 本身不构成任何作用域，所以在解析 `arrowGet: () => this.name` 时，
     该箭头函数外层的词法作用域直接就是【定义 obj 时所处的外部作用域（通常是全局作用域或模块顶层）】。
   - 也就是说：这个箭头函数实际上是在【全局/外层环境】中被定义的，而不是在 obj 内部。

3. this 的继承结果：
   - 箭头函数的 this 直接捕获了外层上下文的 this：
     - 在浏览器非严格模式下，外层 this 指向 window（window 上通常没有定义 name 属性）。
     - 在 Node.js 模块中，顶层 this 指向 module.exports（当前为空对象 `{}`）。
   - 因此，this.name 查找的是全局/模块对象上的 name，结果即为 undefined。

【总结准则】：
- 不要在对象字面量中直接使用箭头函数来定义需要访问该对象自身属性的“方法”。
- 对象方法推荐使用 ES6 简写形式：getName() { return this.name; }。
*/

