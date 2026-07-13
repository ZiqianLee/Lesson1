// 演示基本布尔值
console.log(true);
console.log(false);

// 演示逻辑与（AND）操作符
console.log(true && true);
console.log(true && false);

// 演示不同类型的值用于布尔上下文
console.log('Hi');    // 字符串，被视为真值
console.log(0);       // 数字0，被视为假值
console.log(undefined); // undefined，被视为假值
console.log(null);    // null，被视为假值
console.log(null + 1); // null + 1 = 1，返回1，被视为真值
console.log(NaN);     // NaN，被视为假值
console.log(1);       // 非零数字，被视为真值
console.log('');      // 空字符串，被视为假值
console.log(-4);      // 非零负数，被视为真值
console.log(Infinity); // 无穷大，被视为真值
console.log(-Infinity); // 负无穷大，被视为真值
  
// 演示逻辑与（AND）操作符在不同值上的行为
console.log(undefined && 10);   // undefined是假值，返回undefined
console.log(null && 10);        // null是假值，返回null
console.log(10 && undefined);   // 第一个操作数为真，返回第二个操作数undefined
console.log(10 && null);        // 第一个操作数为真，返回第二个操作数null
console.log(10 && 10);          // 两个操作数都为真，返回第二个操作数

// 演示逻辑或（OR）操作符在不同值上的行为
console.log(undefined || 10);   // undefined是假值，返回第二个操作数10
console.log(null || 10);        // null是假值，返回第二个操作数10
console.log(10 || undefined);   // 第一个操作数为真，返回第一个操作数10
console.log(10 || null);        // 第一个操作数为真，返回第一个操作数10
console.log(10 || 10);          // 第一个操作数为真，返回第一个操作数10
console.log(10 || NaN);         // 第一个操作数为真，返回第一个操作数10
console.log(undefined || NaN);  // undefined是假值，检查第二个操作数NaN也是假值，返回NaN

// 演示NaN（Not-a-Number）值
console.log(NaN + 1); // 输出NaN，表示不是一个有效的数字
console.log(NaN === NaN); // 输出false，NaN不等于任何其他值，包括自身
console.log(isNaN(NaN)); // 输出true，isNaN函数用于检查一个值是否为NaN