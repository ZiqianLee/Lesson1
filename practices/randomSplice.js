// 练习：遍历数组并在特定条件（随机概率）下删除元素
// 注意：在循环中删除元素时，后续元素的索引会向前移动，因此需要 i-- 来保证不跳过元素

var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < arr.length; i++) {
  arr[i] = i + 1;
  if (Math.random() > 0.5) {
    console.log(`Splice element ${arr[i]} at index ${i}`);
    arr.splice(i, 1);
    i--; // 关键点：splice 会修改原数组长度，需要将索引回退一位
  }
}

console.log("最终数组：", arr);
