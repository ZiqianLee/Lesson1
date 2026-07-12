// 基础函数表达式示例
// 函数表达式是将函数赋值给变量的一种方式

// 1. 基础函数表达式 - 将匿名函数赋值给变量
const greet = function(name) {
    // 返回问候语
    return "你好, " + name + "!";
};
// 调用函数表达式
console.log(greet("小明")); // 输出: 你好, 小明!

// 2. 带多个参数的函数表达式
const add = function(a, b) {
    // 计算两个数的和
    return a + b;
};
console.log(add(5, 3)); // 输出: 8

// 3. 函数表达式作为对象的方法
const calculator = {
    // 将函数赋值给对象属性
    multiply: function(x, y) {
        // 返回两数相乘的结果
        return x * y;
    }
};
console.log(calculator.multiply(4, 6)); // 输出: 24

// 4. 立即执行函数表达式 (IIFE)
// 定义后立即执行的函数表达式
const result = (function(x, y) {
    // 立即计算并返回结果
    return x + y;
})(10, 20);
console.log(result); // 输出: 30

// 5. 函数表达式作为参数传递
const numbers = [1, 2, 3, 4, 5];
// 将函数表达式作为参数传递给map方法
const doubled = numbers.map(function(num) {
    // 每个数字乘以2
    return num * 2;
});
console.log(doubled); // 输出: [2, 4, 6, 8, 10]

// 6. 函数表达式的条件赋值
const isEven = function(number) {
    // 判断数字是否为偶数
    return number % 2 === 0;
};
console.log(isEven(4)); // 输出: true
console.log(isEven(5)); // 输出: false

// 7. 返回函数的函数表达式 (高阶函数)
const createMultiplier = function(factor) {
    // 返回一个新的函数，该函数将输入值乘以factor
    return function(value) {
        return value * factor;
    };
};
// 创建一个将输入值乘以3的函数
const triple = createMultiplier(3);
console.log(triple(5)); // 输出: 15

// 8. 简单的函数表达式回调
const processArray = function(arr, callback) {
    // 对数组的每个元素应用回调函数
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
};

const square = function(x) {
    // 返回数字的平方
    return x * x;
};

const numbersToSquare = [1, 2, 3, 4];
const squaredNumbers = processArray(numbersToSquare, square);
console.log(squaredNumbers); // 输出: [1, 4, 9, 16]

// 9. 更多立即执行函数 (IIFE) 示例

// IIFE 用于创建私有作用域
const privateCounter = (function() {
    let count = 0; // 私有变量
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
})();
console.log(privateCounter.getCount()); // 输出: 0
console.log(privateCounter.increment()); // 输出: 1
console.log(privateCounter.increment()); // 输出: 2
console.log(privateCounter.decrement()); // 输出: 1

// IIFE 用于模块模式
const myModule = (function() {
    // 私有变量和函数
    const privateVariable = "这是私有变量";
    
    const privateMethod = function() {
        return "这是私有方法";
    };
    
    // 返回公有API
    return {
        publicProperty: "这是公共属性",
        
        publicMethod: function() {
            return "公共方法可以访问私有成员: " + privateVariable + ", " + privateMethod();
        }
    };
})();
console.log(myModule.publicProperty); // 输出: 这是公共属性
console.log(myModule.publicMethod()); // 输出: 公共方法可以访问私有成员: 这是私有变量, 这是私有方法

// IIFE 用于避免全局污染
(function(global) {
    // 在这里定义不会污染全局命名空间的变量
    const localVar = "局部变量";
    global.globalVar = "通过参数传入的全局变量"; // 如果需要，可以通过参数访问全局对象
})(window || {}); // 浏览器环境使用window，Node.js环境使用{}

// IIFE 用于初始化配置
const config = (function() {
    const defaults = {
        apiUrl: "https://api.example.com",
        timeout: 5000,
        retries: 3
    };
    
    // 初始化代码
    console.log("配置已初始化");
    
    return defaults;
})();
console.log(config.apiUrl); // 输出: https://api.example.com