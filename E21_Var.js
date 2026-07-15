console.log('=== var 作用域演示 ===');

console.log('\n1. var 没有块级作用域');
var title = '全局标题';
console.log('此时的title为:', title);

console.log('\n在if 块里重新声明 title 变量');
if (true) {
	var title = '在if块里的title';
	console.log('if块内部log出title: ', title);
}

console.log('if块外部log出title: ', title);

console.log('\n2. var 只有函数作用域');

function showFunctionScope() {
	var message = '函数里的变量'; 
    console.log('在函数里访问外部title:', title);
    console.log('函数内部log出message:', message);
    console.log(`create an if in the function`);
    
	if (true) {
		var message = '在 if 块里重新声明同一个变量';
		console.log('函数内部的 if 块:', message);
	}

	console.log('函数内部的 if 块外:', message);
}

showFunctionScope();

console.log('\n3. var 在 for 循环后仍然能访问');

for (var i = 0; i < 3; i++) {
	console.log('循环内部 i =', i);
    
}

console.log('循环结束后 i =', i);

console.log('\n总结：var 会忽略 if / for 这些块，只看函数和全局作用域。');

// console.log('循环内部的message变量:', message); // 这行代码会抛出错误，因为message变量只在showFunctionScope函数内部有效，无法在全局作用域访问

