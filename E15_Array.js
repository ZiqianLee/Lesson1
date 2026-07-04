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

// 原始数组定义
let originalArray = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
// 用于存储筛选结果的数组
let resultArray = [];

// 遍历数组，筛选大于等于 10 的元素
for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] >= 10) {
        resultArray.push(originalArray[i]);
    }
}

// 输出结果
// Logs the original array to the console
console.log(`originalArray: ${originalArray}`);

// Logs a message indicating that the following output will be elements of the original array that are greater than or equal to 10
console.log('originalArray大于等于10的元素有：');

// Logs the result array, which contains elements from the original array that meet a specified condition (greater than or equal to 10)
console.log(resultArray);

// 定义一个包含两个元素的数组
const arra = [1,4];
// 使用splice方法对数组进行操作
// 参数1: 1 - 表示开始修改的位置索引（从第2个元素开始）
// 参数2: 0 - 表示要删除的元素数量（0表示不删除任何元素）
// 参数3: 2,3 - 表示要插入的新元素（在指定位置插入2和3）
const res = arra.splice(1,0,2,3);
// 打印数组 arra 的内容，预期输出为 [1, 2, 3, 4]
console.log(arra); // [1, 2, 3, 4]
// 打印数组 res 的内容，预期输出为空数组 []
console.log(res); // []



/**
 * 冒泡排序算法示例
 * 该代码演示了使用冒泡排序对数组进行升序排序的过程
 */
// 初始化一个数组
let arr2 = [2, 4, 3, 5, 1]
console.log(arr2); // 输出原始数组

// 外层循环控制排序轮数
for (let i = 0; i < arr2.length - 1; i++) {
    // 内层循环进行相邻元素比较和交换
    for (let j = 0; j < arr2.length - i - 1; j++) {
        
        // 如果前一个元素大于后一个元素，则交换它们的位置
        if (arr2[j] > arr2[j + 1]) {
   
            // 使用临时变量进行元素交换
            let temp = arr2[j]
            arr2[j] = arr2[j + 1]
            arr2[j + 1] = temp
        }
    }
}

// 输出排序后的数组
console.log(arr2)


