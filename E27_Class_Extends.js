// ==========================================
// 1. 父类（基类 / 超类）：Animal 动物类
// 抽取所有动物共有的属性（name, age）和方法（eat, speak）
// ==========================================
class Animal {
  constructor(name, age) {
    this.name = name; // 共有属性：名字
    this.age = age; // 共有属性：年龄
  }

  // 共有方法：吃东西
  eat() {
    console.log(`${this.name} 正在吃东西...`);
  }

  // 共有方法：叫声（基础实现）
  speak() {
    console.log(`${this.name} 发出了叫声。`);
  }
}

// ==========================================
// 2. 子类 1：Dog 狗类（继承自 Animal）
// 使用 extends 关键字实现继承
// ==========================================
class Dog extends Animal {
  constructor(name, age, breed) {
    // 关键点 1：super()
    // 在子类的 constructor 中，必须先调用 super(...) 来调用父类的构造函数
    super(name, age);

    // 子类独有的属性
    this.breed = breed; // 品种
  }

  // 关键点 2：方法重写（Override）
  // 子类定义了与父类同名的方法，会覆盖父类的默认实现
  speak() {
    console.log(`${this.name}(${this.breed}): 汪汪汪 🐶!`);
  }

  // 关键点 3：子类独有的方法
  fetch() {
    console.log(`${this.name} 开心地把飞盘叼了回来 🎾~`);
  }
}

// ==========================================
// 3. 子类 2：Cat 猫类（继承自 Animal）
// ==========================================
class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age); // 调用父类构造函数初始化 name 和 age
    this.color = color; // 子类独有属性：毛色
  }

  // 重写父类的 speak 方法
  speak() {
    console.log(`${this.name}(${this.color}猫): 喵喵喵 🐱~`);
  }

  // 关键点 4：在子类中通过 super.eat() 增强父类方法
  eat() {
    super.eat(); // 先执行父类的吃东西逻辑
    console.log(`${this.name} 吃饱后舔了舔爪子 🐾`);
  }
}

// ==========================================
// 4. 实例化与测试验证
// ==========================================
console.log("========= 1. 实例化 Dog 对象 =========");
const myDog = new Dog("Buddy", 3, "金毛");
console.log(myDog);
myDog.eat(); // 继承自父类 Animal 的方法
myDog.speak(); // 执行子类 Dog 重写后的方法
myDog.fetch(); // 执行子类 Dog 独有的方法

console.log("\n========= 2. 实例化 Cat 对象 =========");
const myCat = new Cat("Mimi", 2, "白色");
console.log(myCat);
myCat.speak(); // 执行子类 Cat 重写后的方法
myCat.eat(); // 执行子类 Cat 增强后的 eat 方法

console.log("\n========= 3. 类型检查(instanceof) =========");
// 子类实例既属于子类，也属于父类
console.log("myDog 是否是 Dog 实例:", myDog instanceof Dog); // true
console.log("myDog 是否是 Animal 实例:", myDog instanceof Animal); // true

// export {} 避免 node.js 报错
// 模块化标准语句，表明这是一个独立的 JS 模块
export {};
