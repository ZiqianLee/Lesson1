/**
 * 演示 JavaScript 中基本数据类型和运算的示例代码
 * 包括布尔值、未定义值、空值以及它们的类型转换
 */
// 定义一个布尔型变量 isCool 并赋值为 false
let isCool = false;
// 输出 isCool 的值
console.log(isCool);
// 输出 isCool 的数据类型
console.log(typeof isCool);
// 输出 3 > 4 取反后的结果，因为 3 > 4 为 false，取反后为 true
console.log(!(3 > 4));
// 定义一个未初始化的变量 num1
let num1;

// 输出未初始化的变量 num1，结果为 undefined
console.log(num1);
// 定义一个变量 obj 并赋值为 null
let obj = null;
// 输出 obj 的数据类型，注意 typeof null 返回 'object' 是 JavaScript 的历史遗留问题
console.log(typeof obj);

// 将 undefined 转换为数字后加 1，undefined 转换为数字是 NaN，任何数加 NaN 都是 NaN
console.log(Number(undefined) + 1);

console.log(Number(undefined) + Number(null)); 
// undefined 转换为数字是 NaN，null 转换为数字是 0，所以结果是 NaN

// 将 null 转换为数字后加 1，null 转换为数字是 0，所以结果是 1
console.log(Number(null) + 1)
// 计算两个 null 值转换为数字后的和：null 转换为数字是 0，所以 0 + 0 = 0
console.log(Number(null) + Number(null));

NaN + 1 // NaN - NaN 与任何数相加都是 NaN
console.log(NaN + 'Hi') // NaN + 'Hi' 返回 'NaNHi'

Math.exp(2)




