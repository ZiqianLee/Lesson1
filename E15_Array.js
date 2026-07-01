/**
 * 创建一个包含多种数据类型的数组并输出每个元素及其类型
 * 数组包含数字、字符串、布尔值、对象和嵌套数组等不同类型的元素
 */
//生成一个一个数组，里面存了各种类型的数据各一个
let arr = [1, 'second', true, {name: '张三'}, [1, 2, 3]];
//遍历数组并打印每个元素及其数据类型
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], typeof arr[i]);
}

// 原始数组
let originalArray = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
let resultArray = [];

// 遍历数组，筛选大于等于 10 的元素
for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] >= 10) {
        resultArray.push(originalArray[i]);
    }
}

// 输出结果
console.log(`originalArray: ${originalArray}`);
console.log('originalArray大于等于10的元素有：'); 
console.log(resultArray);