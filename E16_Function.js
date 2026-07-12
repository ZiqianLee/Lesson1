/**
 * 打印99乘法表的函数
 * 该函数使用双重循环实现，外层循环控制行数，内层循环控制每行的表达式数量
 * 每行结束后会打印一条分隔线，使输出更加清晰
 */

sayHello();
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

/**
 * 比较两个数字并返回较大的那个
 * @param {number} [a=0] - 第一个要比较的数字，默认为0
 * @param {number} [b=0] - 第二个要比较的数字，默认为0
 * @returns {number} 返回两个数字中较大的一个；如果两数相等则返回其中一个
 * @throws {TypeError} 当任一参数不是有效数字时抛出错误
 */
function getBigger(a=0, b=0) {

  if (typeof a !== 'number' || !Number.isFinite(a) || 
      typeof b !== 'number' || !Number.isFinite(b)) {
    throw new TypeError('Both arguments must be valid numbers');
  }

  if (a === b) {
    return a;
  } else 
   return Math.max(a, b); 
}

/**
 * 测试getBigger函数的多种调用情况
 * 包括正常参数、参数顺序交换、相等参数以及无参数的情况
 */
// 调用getBigger函数，传入5和10，并输出结果
console.log(getBigger(5, 10)); 
// 调用getBigger函数，传入10和5，并输出结果（测试参数顺序交换）
console.log(getBigger(10, 5)); 
// 调用getBigger函数，传入两个相等的值5，并输出结果（测试边界情况）
console.log(getBigger(5, 5)); 
// 调用getBigger函数，不传入任何参数，并输出结果（测试无参数情况）
console.log(getBigger()); 

/**
 * 这是JSDoc注释，用于描述函数的作用和参数
 * @param {string} name - 用户的名字
 * @returns {string} 拼接后的问候语
 */
function greet(name) {
  // 这是函数体内部的单行注释
  return "Hello, " + name; 
}

function getArrayMaxMinValue(arr = []) {
/**
 * 检查输入是否为非空数组，并且数组中不包含NaN值
 * 然后遍历数组找出最大值和最小值
 */
// 检查输入是否为数组且不为空
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Input must be a non-empty array');
  }

// 检查数组中是否包含NaN值
  if (arr.some(Number.isNaN)) {
    throw new Error('Array must not contain NaN values');
  }
 
// 初始化最大值和最小为数组的第一个元素
  let max = arr[0];
  let min = arr[0];

// 遍历数组，从第二个元素开始
  for (let i = 1; i < arr.length; i++) {
    // 如果当前元素大于最大值，则更新最大值
    if (arr[i] > max) {
      max = arr[i];
    }
    // 如果当前元素小于最小值，则更新最小值
    if (arr[i] < min) {
      min = arr[i];
    }
  }

 return { max, min }; 
}

// 测试getArrayMaxMinValue和greet函数
let result = getArrayMaxMinValue([1, 2, 3, 4, 5]);
console.log(result.max);// 输出最大值
console.log(result.min);// 输出最小值
console.log(greet("Alice"));

/**
 * 函数fn1的定义
 * 注意：这里有两个同名的函数定义，后面的定义会覆盖前面的定义
 */
function fn1() {
  console.log("fn1"); // 这行代码实际上不会被执行，因为函数定义被覆盖了
}

/**
 * 函数fn1的重新定义
 * 这个定义会覆盖上面的fn1定义
 */
function fn1() {
  console.log("fn2"); // 这行代码会被执行，因为这是最新的fn1函数定义
}

fn1(); // 调用fn1函数，输出"fn2"

/**
 * 这是一个名为fn3的函数
 * @param {any} p1 - 第一个参数
 * @param {any} p2 - 第二个参数
 */
function fn3(p1, p2) {
  return p1 + p2; // 返回两个参数的和
}
console.log(fn3()); // 调用fn3函数，但未传入参数，输出NaN，因为undefined + undefined = NaN
console.log(fn3(1)); // 调用fn3函数，传入一个参数，输出NaN，因为1 + undefined = NaN
console.log(fn3(1, 2)); // 调用fn3函数，传入两个参数，输出3，因为1 + 2 = 3
console.log(fn3(1, 2, 3)); // 调用fn3函数，传入三个参数，输出3，因为1 + 2 = 3，多余的参数会被忽略
