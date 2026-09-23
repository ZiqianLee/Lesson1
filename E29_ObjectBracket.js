// 中括号最常见的用法是访问对象属性。
const player = {
	name: "Alice",
	balance: 500,
	spins: 0,
	// 属性名中包含连字符，必须使用引号，否则 - 会被当成减号。
	"player-level": 5
};

// name、balance 和 spins 都是合法的属性名，所以定义时可以省略引号。
// 访问时，中括号内直接写字符串时必须加引号。
// player["name"] 等价于 player.name。
// 1. 使用字符串访问属性
console.log(player["name"]); // Alice
console.log(player["player-level"]); // 5
console.log(player["balance"]); // 500

// 2. 使用变量动态访问属性
// 中括号内放变量时不加引号，变量的值会作为属性名。
const propertyName = "balance";
console.log(player[propertyName]); // 500

// 如果写成 player["propertyName"]，查找的是名字为 propertyName 的属性，
// 而不是 propertyName 变量值对应的属性。

// 3. 使用中括号修改属性
player["spins"] += 1;
console.log(player["spins"]); // 1

// 4. 使用变量动态创建属性
const newProperty = "score";
player[newProperty] = 100;
console.log(player[newProperty]); // 100

// 5. 修改和读取特殊属性名
player["player-level"] += 1;
console.log(player["player-level"]); // 6

// 6. 中括号和点号的区别
console.log(player.name); // 点号适合合法的固定属性名
console.log(player["player-level"]); // 中括号适合特殊属性名
console.log(player[propertyName]); // 中括号也适合动态属性名

// 下面这种写法会报错，因为连字符会被当成减号：
// console.log(player.player-level);
