/**
 * 创建一个计数器函数，该函数可以跟踪自身被调用的次数
 * 返回一个内部函数，该函数会记录并增加调用次数
 * @returns {Function} counter - 每次调用时打印当前调用次数并递增计数的函数
 */
const invokCounter = () => {
    // 外部函数作用域中的变量，被内部函数闭包引用
    let count = 1;
    const innerCounterFn = () => {
        // 内部函数访问外部函数作用域中的变量，演示闭包特性
        console.log(`Invok count is ${count}`);
        // 修改外部函数作用域中的变量值
        count++;
    };
    return innerCounterFn;
};

// 创建两个独立的计数器实例，它们各自维护自己的调用计数
let counter1 = invokCounter();
let counter2 = invokCounter();

// 调用counter1函数，输出调用次数并递增计数
counter1(); // 输出: Invok count is 1
counter1(); // 输出: Invok count is 2
counter1(); // 输出: Invok count is 3