/**
 * 本代码演示了JavaScript中的正则表达式、循环语句、对象和数组操作以及布尔值转换
 * 包含for...in和for...of循环的使用示例，以及各种数据类型的布尔值转换结果
 */
// 定义一个包含数字的字符串变量
let mystr = "Hello10086 World!";

// 定义一个正则表达式，用于匹配2到7位连续的数字
let regex = /[0-9]{2,7}/;

// 测试字符串中是否存在符合正则表达式的模式
// 使用正则表达式测试字符串
console.log(regex.test(mystr));

console.log("\n--- for...in examples ---");

// Example 1: for...in over object properties
const person = {
  name: "Jason",
  age: 28,
  city: "Toronto",
  ["country"]: "Canada",
};

// 使用for...in循环遍历person对象的所有可枚举属性
for (const key in person) {
  // 输出当前属性名(key)及其对应的值(person[key])
  console.log(key, "=>", person[key]);
  //为什么用[]? 为什么不用person.key? 因为person.key是字符串"key"
  //而person[key]是对象person的属性值
}

// Example 2: for...in over array indexes
const colors = ["red", "green", "blue"];

// 使用for...in循环遍历colors数组的索引
for (const index in colors) {
  // 打印每个元素的索引和对应的值
  console.log("index:", index, "value:", colors[index]);
}

// 打印分隔符，用于区分不同的循环示例
console.log("\n--- for...of examples ---");

/**
 * 使用for...of循环遍历colors数组
 * 每次迭代输出当前元素及其值
 */
for (const color of colors) {
  console.log("color:", color); // 输出当前颜色值
}

const word = "JS"; // 定义一个字符串变量word

/**
 * 使用for...of循环遍历字符串word
 * 每次迭代输出当前字符及其值
 */
for (const ch of word) {
  console.log("char:", ch); // 输出当前字符
}

/**
 * 使用for...of循环结合entries()方法遍历colors数组
 * entries()方法返回一个包含索引和值的迭代器
 * 每次迭代输出索引和对应的值
 */
for (const [i, value] of colors.entries()) {
  console.log("entry", i, value); // 输出当前元素的索引和值
}

// 打印person变量的值
console.log(person);
// 打印colors变量的值
console.log(colors);

// 使用!!将person变量转换为布尔值并打印
console.log(!!person);
// 使用!!将colors变量转换为布尔值并打印
console.log(!!colors);
// 使用!!将mystr变量转换为布尔值并打印
console.log(!!mystr);
// 使用!!将regex变量转换为布尔值并打印
console.log(!!regex);
// 使用!!将数字0转换为布尔值并打印
console.log(!!0);
// 使用!!将空字符串转换为布尔值并打印
console.log(!!"");
// 使用!!将null转换为布尔值并打印
console.log(!!null);
// 使用!!将数字-2转换为布尔值并打印
console.log(!!-2);
