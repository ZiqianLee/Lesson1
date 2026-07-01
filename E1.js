//alert("Hi World!")
//document.write("Hi World!")
console.log("Hi World!");
console.log("Show a Not-a-Number: " + Infinity / -Infinity);

var z, x, y;
x = 10;
y = x + "y";
console.log(y + "\n" + Infinity / -Infinity);

/**
 * 演示JavaScript中不同数据类型的使用
 * 包括BigInt、Date、undefined、String类型以及用户交互
 */
// 使用BigInt显示最大安全整数加1
console.log("Show a BigInt: " + BigInt(Number.MAX_SAFE_INTEGER));

// 创建Date对象获取当前日期时间
let date = new Date();
// 定义两个数值变量
let a = 18;
let b = 18;

// 以本地格式显示日期时间
console.log("Show a Date: " + date.toLocaleString());
// 检查未定义变量z的类型
console.log(typeof z);

// 使用prompt弹窗获取用户输入
//let user = prompt("What is your name?");

// 在页面上显示用户名称
//document.write("You are " + user);

// 声明一个名为myArray的变量，初始值为undefined
let myArray;
// 定义一个数组 myArray，包含多个元素和日期字符串
myArray = [z, x, y, a, b, date.toLocaleString()];
// 输出整个数组到控制台
console.log('Here is my Array: ');
console.log(myArray);
// 输出数组中的最后一个元素（通过索引 myArray.length - 1 获取）
console.log('The last element of myArray is: ' + myArray[myArray.length - 1]);
// 输出变量 a 与字符串 "a" 相加后的类型
console.log(typeof (a + `a`));
console.log(`The result of a+b is ${a+b}`);

