//本文件是用于学习作用域的

let globalNum = 100; // 定义一个全局变量 globalNum，并赋值为 100

/**
 * 一个简单的函数，用于演示字符串变量的声明和赋值
 * 函数名为myFun，没有参数
 */
function myFun (){
    // 使用let关键字声明一个字符串变量myStr
    // 并将字符串"My hello world"赋值给它
    let myStr = "My hello world";
}

// 尝试输出myStr变量的值
// 注意：由于myStr是在函数内部声明的局部变量，这里会抛出ReferenceError错误
console.log(myStr);// ReferenceError: myStr is not defined

