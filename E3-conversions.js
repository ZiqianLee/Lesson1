// JavaScript 类型转换示例
// 数字相加，结果为数字
console.log(1+1); // 2
// 数字和字符串相加，发生隐式类型转换，结果为字符串
console.log(1+'1'); // 11
// 一元加号运算符将字符串转换为数字后再相加
console.log(+'1'+ 1); // 2
// 字符串和数字相加，数字会被转换为字符串
console.log('a'+1); // a1
// 数字和字符串相减，字符串会被转换为数字
console.log(1-'1'); // 0
// 一元加号运算符将正数转换为数字
console.log(+123); // 123
// 一元加号运算符将字符串转换为数字，并检查其类型
console.log(typeof +'123'); // number
// 一元加号运算符将包含非数字字符的字符串转换为NaN
console.log(+'123a'); // NaN
// 一元加号运算符将数字转换为数字，并检查其类型
console.log(typeof +123); // number

// 声明一个字符串变量
let str1  = '123';
// 使用一元加号运算符将字符串转换为数字
console.log(+str1); // 123
// 检查转换后的类型
console.log(typeof +str1); // number
// 使用parseInt函数解析字符串，提取整数部分
console.log(parseInt('12px')); // 输出: 12，解析字符串"12px"中的整数部分
// 使用parseInt函数解析字符串，提取整数部分，忽略小数部分
console.log(parseInt('12.5px')); // 输出: 12，解析字符串"12.5px"中的整数部分
// 使用 parseFloat 函数解析字符串中的浮点数
console.log(parseFloat('12.5px'));  // 输出: 12.5，解析字符串"12.5px"中的浮点数部分
console.log(parseFloat('12.22px')); // 输出: 12.22，解析字符串"12.22px"中的浮点数部分

// 比较两个字符串的大小关系
console.log('aa' < 'b'); // 输出: true，因为在字典序中，'aa' 小于 'b'
 