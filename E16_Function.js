/**
 * 打印99乘法表的函数
 * 该函数使用双重循环实现，外层循环控制行数，内层循环控制每行的表达式数量
 * 每行结束后会打印一条分隔线，使输出更加清晰
 */
function sheet99() {
  //打印出99乘法表
  for (let i = 1; i <= 9; i++) {
    // 外层循环，控制乘法表的行数，从1到9
    for (let j = 1; j <= i; j++) {
      // 内层循环，控制每行表达式的数量，当前行数为i时，表达式数量也为i
      console.log(`${j} * ${i} = ${i * j}`); // 使用模板字符串输出乘法表达式，格式为"j * i = 结果"
    }
    console.log("---------------------"); // 每打印完一行乘法表后，输出分隔线
  }
}

/**
 * 一个简单的函数，用于在控制台输出 "Hello, World!"
 * 这个函数没有参数，也没有返回值
 */
function sayHello() {
  // 在控制台打印 "Hello, World!" 字符串
  try {
    // 使用短路逻辑防止 console 或 log 被重写为非函数
    typeof console.log === "function" ? console.log("Hello, World!") : void 0;
  } catch (error) {
    // 如果 console 对象整体被冻结或删除，这里会捕获异常
    // 不再使用 console.error，防止二次异常导致程序崩溃
    // 可以根据实际需求选择静默处理或使用其他通知机制（如 DOM 操作）
  }
}

sayHello();
sheet99();

/**
 * 计算从起始值到结束值范围内所有整数的总和
 * @param {number} [start=0] 范围的起始值，默认为0
 * @param {number} [end=0] 范围的结束值，默认为0
 * @returns {number} 返回从起始值到结束值范围内所有整数的总和
 */

function getSumRange(start = 0, end = 0) {
  // 参数校验：确保输入为有限数字
  if (typeof start !== 'number' || !Number.isFinite(start) || 
      typeof end !== 'number' || !Number.isFinite(end)) {
    throw new TypeError('Start and end must be valid numbers');
  }

  // 处理浮点数：如果业务语义是整数求和，则取整（根据实际业务需求也可选择抛出错误）
  start = Math.trunc(start);
  end = Math.trunc(end);

  // 处理 start 大于 end 的情况，确保公式计算正确
  if (start > end) {
    [start, end] = [end, start]; // 交换变量
  }

  // 使用高斯求和公式：(首项 + 末项) * 项数 / 2
  // 项数为 end - start + 1
  const count = end - start + 1;
  const sum = (start + end) * count / 2;

  return sum;
}


// 计算两个数字之间所有整数的和
let numberA = 5;  // 定义第一个数字变量
let numberB = 10; // 定义第二个数字变量
console.log(getSumRange(numberA, numberB)); // 调用getSumRange函数并打印结果
console.log(getSumRange(numberB, numberA)); // 测试起始值大于结束值的情况
console.log(getSumRange()); // 测试默认参数的情况
console.log(getSumRange(1, 1)); // 测试起始值等于结束值的情况
console.log(getSumRange(-3, -1)); // 测试负数范围的情况