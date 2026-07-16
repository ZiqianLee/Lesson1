/**
 * 计算所有传入参数的总和
 * 使用arguments对象获取函数参数
 * 这个方法不推荐使用，因为arguments对象在箭头函数中不可用，且不支持数组方法
 * @returns {number} 所有参数的总和
 */
function sumAll() {
    let sum = 0; // 初始化sum为0
    for (let i = 0; i < arguments.length; i++) { // 遍历所有参数
        sum += arguments[i]; // 将每个参数值累加到sum中
    }
    return sum; // 返回计算结果
}
console.log(sumAll(1,2,3)); // 输出6
/**
 * 使用rest参数计算所有传入参数的总和，箭头函数没有arguments对象，
 * 因此使用rest参数来收集所有参数
 * @param {...number} args - 任意数量的数字参数
 * @returns {number} - 所有参数的总和
 */
const sumAllrest = (...args) => { // 使用rest参数...args收集所有参数
    let sum = 0; // 初始化总和为0
    for (let i = 0; i < args.length; i++) { // 遍历所有参数
        sum += args[i]; // 将每个参数加到总和中
    }
    return sum; // 返回计算得到的总和
}
console.log(sumAllrest(1,2,3,4)); 

function sumAllrest2(num1,num2, ...args) {
    let sum = num1 + num2; // 初始化总和为前两个参数的和
    for (let i = 0; i < args.length; i++) { // 遍历剩余的参数
        sum += args[i]; // 将每个参数加到总和中
    }
    return sum; // 返回计算得到的总和
}

console.log(sumAllrest2(1,2,3,4,5)); // 输出15