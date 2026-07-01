/**
 * 演示三元运算符（条件运算符）的用法
 * 格式：condition ? valueIfTrue : valueIfFalse
 */

// 使用三元运算符比较3和5，并输出相应结果
console.log(3>5?'3 is greater than 5':'3 is less than 5');

// 提示用户输入一个数字
let num = prompt('Please input a number: ');

// 使用三元运算符检查数字是否小于10，如果是则在前面加0，否则保持原样
num = num < 10 ? 0 + num : num;

// 显示处理后的数字
alert(num);