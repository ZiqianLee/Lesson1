/**
 * 计算并输出0到9之间所有偶数的和
 * 使用for循环遍历数字，通过条件判断筛选偶数，并累加求和
 */
// 初始化变量sum为0，用于存储偶数的和
let sum = 0;
// 使用for循环遍历0到9的数字
for (let i = 0; i < 10; i++) {
    // 检查当前数字i是否能被2整除（即是否为偶数）
    if (i % 2 === 0) {
        // 如果是偶数，则将其加到sum中
        sum += i;
    }
}

// 输出0到9之间所有偶数的和
console.log(`Sum of even numbers from 0 to 9 is: ${sum}`);



// 定义一个包含名字的数组
let nameArr = ['刘德华', '刘晓强', '刘晓庆', '刘若英'];
nameArr = ['刘德华', '刘晓强', '刘晓庆', '刘若英'];
// 注释掉的代码是分别打印数组中的每个元素
// console.log(nameArr[0])
// console.log(nameArr[1])
// console.log(nameArr[2])
// console.log(nameArr[3])
// 使用for循环遍历数组并打印每个元素
for (let i = 0; i < nameArr.length; i++) {
  // 打印数组中索引为i的元素
  console.log(nameArr[i])
}