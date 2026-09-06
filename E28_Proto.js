class Animal {
  name = "animal";

  eat() {
    console.log(`${this.name} 正在吃东西...`);
  }
}
const ani = new Animal();

// 1. 隐式原型（已废弃）：可用于调试/学习查看原型对象，但不推荐在生产中使用
// 结果输出 Animal.prototype
console.log(ani.__proto__);

// 2. 现代推荐标准写法：使用 Object.getPrototypeOf() 获取对象的原型
console.log(Object.getPrototypeOf(ani) === Animal.prototype); // true

// 3. 构造函数属性：原型链上指向创建该实例的构造函数（Animal 类）
console.log(ani.constructor.toString()); // [class Animal]  toString()方法会输出这个类的全部信息

console.log(ani);
