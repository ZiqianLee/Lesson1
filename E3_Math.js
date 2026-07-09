/**
 * 演示JavaScript中Math对象的指数和对数函数的使用
 * 主要展示Math.exp()和Math.log()函数的用法和结果
 */
// 计算e的2次方，结果约为7.389
console.log(Math.exp(2)); // 7.38905609893065
// 计算自然对数，即以e为底的对数，这里计算7.389的自然对数，结果为2
console.log(Math.log(7.38905609893065)); // 2
// 计算1的自然对数，结果为0
console.log(Math.log(1)); // 0
// 计算2的自然对数，结果为0.6931471805599453
console.log(Math.log(2)); // 0.6931471805599453
// 计算3的自然对数，结果为1.0986
console.log(Math.log(3)); // 1.0986122886183793
// 计算0的自然对数，结果为负无穷大
console.log(Math.log(0)); // -Infinity
// 计算负数-1的自然对数，结果为NaN（非数字）
console.log(Math.log(-1)); // NaN
// 计算10的自然对数，结果约为2.303
console.log(Math.log(10)); // 2.302585092994046
// 计算100的自然对数，结果约为4.605
console.log(Math.log(100)); // 4.6051806183472455
// 计算1000的自然对数，结果约为6.908
console.log(Math.log(1000)); // 6.907755282296296

/**
 * 数学常量对象Math的使用示例
 * 展示了Math对象中常用的对数和自然对数常量
 */
console.log(Math.LN10); // 2.302585092994046 - 自然对数ln(10)的值
console.log(Math.LN2); // 0.6931471805599453 - 自然对数ln(2)的值
console.log(Math.LOG10E); // 0.4342944819032235 - 以10为底e的对数log10(e)的值
console.log(Math.LOG2E); // 1.4426950408889635 - 以2为底e的对数log2(e)的值
console.log(Math.log(100) / Math.LN10); // 2 - 自然对数ln(100)的值
console.log(Math.log(1000) / Math.LN10); // 3 - 自然对数ln(1000)的值
console.log(Math.log(10000) / Math.LN10); // 4 - 自然对数ln(10000)的值
console.log(Math.log(512) / Math.LN2); // 9 - 自然对数ln(512)的值
console.log(Math.log(1024) / Math.LN2); // 10 - 自然对数ln(1024)的값
console.log(Math.log(2048) / Math.LN2); // 11 - 自然对数ln(2048)的값

/**
 * 随机数相关函数演示
 * 展示Math.random()与其他Math函数结合使用的不同效果
 */
console.log(Math.ceil(Math.random())); // 输出向上取整后的随机数（结果总是1）
console.log(Math.floor(Math.random())); // 输出向下取整后的随机数（结果总是0）
console.log(Math.floor(Math.random() * 10)); // 输出0到9之间的随机整数
console.log(Math.ceil(Math.random() * 10) +1); // 输出2到11之间的随机整数
console.log(Math.floor(Math.random() * 10 + 10)); // 输出10到19之间的随机整数
console.log(Math.floor(Math.random() * 10 + 10) + 1); // 输出11到20之间的随机整数

// 演示Math.max和Math.min函数的用法
let m = 0;
// 输出Math.max函数本身（函数对象）
console.log(Math.max);
// 使用Math.max比较单个数值m，结果是m本身
console.log(Math.max(m)); // 输出0
// 使用Math.max比较两个数m和1，返回较大者
console.log(Math.max(m,1)); // 输出1
// 使用Math.max比较多个数字，返回最大值
console.log(Math.max(1,2,3,4,5,6,7,8,9,10)); // 输出10
// 使用Math.min比较多个数字，返回最小值
console.log(Math.min(1,2,3,4,5,6,7,8,9,10,11)); // 输出1
// 使用Math.min比较两个数m和1，返回较小者
console.log(Math.min(m,1)); // 输出0
