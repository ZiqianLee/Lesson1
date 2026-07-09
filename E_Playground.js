let mystr = 'Hello10086 World!';


let regex = /[0-9]{2,7}/; 


console.log(regex.test(mystr));


console.log("\n--- for...in examples ---");

// Example 1: for...in over object properties
const person = {
	name: "Jason",
	age: 28,
	city: "Toronto",
};

for (const key in person) {
	console.log(key, "=>", person[key]);
}

// Example 2: for...in over array indexes
const colors = ["red", "green", "blue"];

for (const index in colors) {
	console.log("index:", index, "value:", colors[index]);
}


console.log("\n--- for...of examples ---");

// Example 1: for...of over array values
for (const color of colors) {
	console.log("color:", color);
}

// Example 2: for...of over string characters
const word = "JS";

for (const ch of word) {
	console.log("char:", ch);
}

// Example 3: for...of with entries() to get index + value
for (const [i, value] of colors.entries()) {
	console.log("entry", i, value);
}

console.log(person);
console.log(colors);

