// 布尔值 true 的判断
// 检查布尔值 true
if (true) {
  console.log("true Boolean");
}

console.log('-------');
// 检查数字 1 的布尔值
if (1) {
  console.log("number 1 boolean");
}
console.log('-------');

// 检查数字 -2 的布尔值
if (-2) {
  console.log("number -2 boolean");
}
console.log('-------');

// 检查数字 0 的布尔值
if (0) {
  console.log("number 0 boolean");
}
console.log('-------');

// 检查字符串 'hello' 的布尔值
if ('hello') {
  console.log("a string boolean");
}
console.log('-------');

// Add leap year check logic
/* let  year = +prompt("请输入年份：")
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
  alert(`${year}年是闰年`);
} else {
  alert(`${year}年是平年`);
} */

let score = Number(prompt("请输入分数："))
if (score >= 90 && score <= 100) {
  alert("A");
} else if (score >= 80) {
  alert("B");
} else if (score >= 70) {
  alert("C");
} else if (score >= 60) {
  alert("D");
} else if (score >= 0) {
  alert("E");
} else {
  alert("请输入正确的分数");
} 