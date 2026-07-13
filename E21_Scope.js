//Scope的练习 - 这是一个关于作用域的代码示例，展示了let关键字在for循环中的使用

for(let i = 0; i < 5; i++) {   // 用let关键字声明循环变量i,确保i只在for循环块内有效
    console.log(i);             // 在每次循环中输出当前i的值，范围从0到4
}

console.log(i); 
// 尝试在循环外访问i，应该会抛出ReferenceError，
// 因为i的作用域仅限于for循环块内

for(var i = 0; i < 5; i++) {   // 使用var关键字声明循环变量i，使其成为全局变量
    console.log(i);             // 在每次循环中输出当前i的值，范围从0到4
}

console.log(i); // 在循环外访问i，应该会输出5，因为i是全局变量，可以在任何地方访问

//作用域链的简单例子
// 全局作用域
const g = 'Global Scope';

function outerFn() {
  // 外部函数作用域
  const o = 'Outer Function Scope';
  
  function innerFn() {
    // 内部函数作用域
    const i = 'Inner Function Scope';
    
    // 访问所有三个作用域中的变量
    console.log(g);  // 访问全局作用域变量
    console.log(o);   // 访问外部函数作用域变量
    console.log(i);   // 访问内部函数作用域变量

  }
   
  // 在外部函数中只能访问全局和外部函数作用域的变量
  console.log(g);  // 访问全局作用域变量
  console.log(o);   // 访问外部函数作用域变量
  // console.log(i);   // 访问内部函数作用域变量，这会报错，
  // 因为i不在外部函数作用域中

  return innerFn; // 返回内部函数的引用
}

// 调用outerFn并将其返回的内部函数赋值给Func常量
// outerFn执行完毕后返回innerFn的引用
const Func = outerFn(); 
/**
 * 执行Func函数（实际上是执行innerFn）
 * 此时innerFn仍然可以访问其外部作用域中的变量（g和o），这是闭包的体现
 * 这个函数没有参数，也没有返回值
 */
Func(); // 调用innerFn函数，输出全局、外部和内部作用域的变量值

// 验证作用域链：内部函数可以访问外部作用域的变量，但反之不行
console.log(g);  // 可以访问全局变量
// console.log(o);  // 这会报错，因为o不在全局作用域中
// console.log(i);  // 这会报错，因为i不在全局作用域中