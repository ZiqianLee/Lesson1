
/**
 * 创建一个计数器函数，该函数可以跟踪自身被调用的次数
 * 返回一个内部函数，该函数会记录并增加调用次数
 * @returns {Function} counter - 每次调用时打印当前调用次数并递增计数的函数
 */
function invokCounter() {
    // 外部函数作用域中的变量，被内部函数闭包引用
    let count = 1;
    function innnerCounterFn() {
    // 内部函数访问外部函数作用域中的变量，演示闭包特性
    console.log(`Invok count is ${count}`);
    // 修改外部函数作用域中的变量值
    count++;
    }
    return innnerCounterFn;
}

// 创建两个独立的计数器实例，它们各自维护自己的调用计数
let counter1 = invokCounter();
let counter2 = invokCounter();

// 调用counter1函数，输出调用次数并递增计数
counter1(); // 输出: Invok count is 1
counter1(); // 输出: Invok count is 2
counter1(); // 输出: Invok count is 3

// 调用counter2函数，输出调用次数并递增计数
counter2(); // 输出: Invok count is 1
counter2(); // 输出: Invok count is 2

console.log(`assigning 100 to count variable in global scope`);
const count = 100; // 声明一个全局变量，而不是直接赋值给未声明的变量
// 尝试访问全局作用域中的count变量，这不会影响counter1和counter2的计数
// 因为它们闭包引用的是外部函数作用域中的count变量
console.log(count);// 输出: 100


counter1 = null;  // 将counter1变量设置为null，释放对该计数器函数的引用
console.log(`给counter1赋值null`);
// counter1(); 这行代码会抛出错误，因为counter1已经被设置为null，无法再调用

//counter2 = null;  将counter2变量设置为null，释放对该计数器函数的引用

counter1 = invokCounter(); // 重新创建一个新的计数器实例，重新赋值给counter1
console.log(`给counter1赋值invokCounter()`);
counter1(); // 输出: Invok count is 1
counter1(); // 输出: Invok count is 2
counter1(); // 输出: Invok count is 3