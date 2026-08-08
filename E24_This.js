/**
 * 在控制台打印当前函数执行上下文中的 'this' 对象。
 * 在非严格模式下，全局环境中的普通函数调用会将 'this' 绑定到全局对象（浏览器中是 window）。
 * 在严格模式下 ('use strict')，'this' 的值将是 undefined。
 */
function logThisFn() {
  console.log(this);
}

logThisFn(); // window object (浏览器中) GLOBAL object (Node.js 中)  undefined (严格模式下)

const obj = { name: "obj1" };
const obj2 = { name: "obj2" };

obj.print = logThisFn;
obj2.print = logThisFn;

// 当作为对象方法调用时，'this' 绑定到该对象
obj.print();
obj2.print();

/**
 * 在控制台打印当前函数执行上下文中的 'this.name' 属性。
 * 'this' 的绑定取决于函数的调用方式：
 * - 当作为对象方法调用时，'this' 绑定到该对象
 * - 当作为普通函数调用时，'this' 绑定到全局对象（非严格模式）或 undefined（严格模式）
 */
function logThisNameFn() {
  console.log(this.name);
}
