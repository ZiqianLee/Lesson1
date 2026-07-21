/**
 * 演示 JavaScript 中 for...in 和 for...of 循环的区别
 * for...in 遍历的是数组索引，for...of 遍历的是数组元素值
 */
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  sum = 0;

// 使用 for...in 遍历数组（遍历的是索引）
for (let element in data) {
  console.log(element);
}

// 使用 for...of 遍历数组（遍历的是元素值）
for (let element of data) {
  console.log(element);
}
