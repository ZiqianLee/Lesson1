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

//箭头函数和普通函数的主要区别是：
// 1. this的指向不同。普通函数中的this指向调用它的对象，而箭头函数中的this指向定义它的对象。
// 2. 箭头函数没有自己的arguments对象。普通函数有自己的arguments对象。
// 3. 箭头函数不能作为构造函数使用。普通函数可以作为构造函数使用。
// 4. 箭头函数没有原型对象。普通函数有原型对象。
// 5. 箭头函数不能作为Generator函数使用。普通函数可以作为Generator函数使用。
// 6. 箭头函数不能作为类的方法使用。普通函数可以作为类的方法使用。
// 7. 箭头函数不能作为回调函数使用。普通函数可以作为回调函数使用。
