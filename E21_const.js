// 演示const声明的数组可以修改其内容，尽管引用不能更改
const arr = [1, 2, 3];

arr.pop(); // 移除数组最后一个元素
arr.push(4); // 向数组末尾添加一个元素
arr.shift(); // 移除数组第一个元素
arr.unshift(0); // 向数组开头添加一个元素
arr[0] = "hello"; // 修改数组第一个位置的值
console.log(arr); // 输出最终的数组内容

/**
 * 演示const声明的对象可以修改其属性
 * 虽然变量名person使用const声明（引用不可变），
 * 但对象本身的属性是可以修改的
 */
const person = {
  name: "Jason",
  age: 28,
  city: "Toronto",
};
// 为person对象添加新的country属性
person.country = "Canada";
// 输出修改后的person对象
console.log(person);
