/**
 * 定义一个名为myFunction的函数，用于计算两个参数的和
 * @param {number} x - 第一个加数，默认值为0
 * @param {number} y - 第二个加数，默认值为0
 */
function myFunction(x,y) {
    x=x||0; // 如果x为undefined、null、""、0或false等假值，则将其设置为0
    y=y||0; // 如果y为undefined、null、""、0或false等假值，则将其设置为0
    console.log(`The values of x and y are ${x} and ${y}`); // 输出x和y的值
    console.log(`The sum of x and y is ${x + y}`); // 输出x和y的和
}
myFunction(5,10); // 输出 15
myFunction(); // 输出 0

// 这段代码展示了JavaScript中逻辑与(&&)和逻辑或(||)运算符的使用情况

// 逻辑与(&&)运算符：当两个操作数都为真时返回第二个操作数，否则返回第一个假值
console.log(11 && 22);  // 输出22，因为11和22都为真
console.log(11 || 22);  // 输出11，因为11为真，返回第一个真值


// 逻辑与(&&)和逻辑或(||)与布尔值一起使用
console.log(true && 22);  // 输出22，因为true为真，返回第二个操作数
console.log(true || 22);  // 输出true，因为true为真，返回第一个真值
console.log(false && 22); // 输出false，因为false为假，返回第一个假值
console.log(false || 22); // 输出22，因为false为假，返回第二个操作数


// 逻辑与(&&)与0一起使用（0在布尔上下文中为false）
console.log(0 && 22);    // 输出0，因为0为假，返回第一个假值

// 定义一个变量age，初始值为20
let age = 20; // 逻辑或(||)的短路特性：如果第一个操作数为真，则不会执行第二个操作数


// 逻辑与(&&)的短路特性：如果第一个操作数为假，则不会执行第二个操作数
console.log(false && age++); // 输出false，age++不会执行
console.log(age);            // 输出20，因为age++没有执行

// 使用逻辑或运算符打印11或age++的值
// 由于11为真值，age++不会执行
console.log(11 || age++);  // 输出11，age++未执行
// 打印age的值
// 由于age++未执行，age的值仍为初始值
console.log(age);// 输出20，age未自增

// 使用逻辑与运算符打印true和age++的值
// 当第一个操作数为真时，会执行第二个操作数
console.log(true && age++);  // 输出20，age++执行后age变为21
console.log(age);            // 输出21，age自增1

