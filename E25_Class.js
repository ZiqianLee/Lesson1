/**
 * 定义一个类 P
 * ES6 引入的 class 语法是基于原型的面向对象模式的语法糖。
 */
class P {
  // 私有属性（Private Field）：以 # 开头，只能在类的内部访问，外部无法直接访问
  #address = "street";
  #a;
  #b;
  #c;

  /**
   * 构造函数：用于在创建对象实例（new P(...)）时初始化对象的属性
   * @param {*} a
   * @param {*} b
   * @param {*} c
   */
  constructor(a, b, c) {
    // 实例的私有属性 #a、#b、#c 在构造函数中被赋值为传入的参数 a、b、c
    // 这是为新创建的实例对象设置初始状态的标准做法。
    this.#a = a;
    this.#b = b;
    this.#c = c;
  }

  // this.address 会触发 #address 的 getter
  // this.a 会触发 #a 的 getter
  // this.b 会触发 #b 的 getter
  // this.c 会触发 #c 的 getter
  // 总结: this.xx 在类方法中访问的是 实例的 属性（有 getter 的除外，会触发 getter）
  thisA() {
    console.log(this.address + " " + this.a); // 输出: "street 1"（this.a 触发了 get a()）
  }

  thisB() {
    console.log(this.address + " " + this.b); // 输出: "street 2"（this.b 触发了 get b()）
  }

  thisC() {
    console.log(this.address + " " + this.c); // 输出: "street 3"（this.c 触发了 get c()）
  }

  // ==================== Getter & Setter 访问器方法 ====================

  // #address 的访问器
  get address() {
    return this.#address;
  }
  set address(val) {
    this.#address = val;
  }

  // #a 的访问器
  get a() {
    return this.#a;
  }
  set a(val) {
    this.#a = val;
  }

  // #b 的访问器
  get b() {
    return this.#b;
  }
  set b(val) {
    this.#b = val;
  }

  // #c 的访问器
  get c() {
    return this.#c;
  }
  set c(val) {
    this.#c = val;
  }
}

// ==================== 测试与使用 ====================

// 1. 实例化对象
const p1 = new P(1, 2, 3);

// 2. 打印实例对象结构（私有属性在外部不可直接枚举）
console.log("直接打印具有私有属性的 p1 实例对象:", p1);

console.log("--------------------------------------------------");

// 3. 调用实例方法（内部 this.a 等会触发 getter 读取私有属性）
p1.thisA(); // 输出: street 1
p1.thisB(); // 输出: street 2
p1.thisC(); // 输出: street 3

console.log("--------------------------------------------------");

// 4. 通过 Getter / Setter 读取和修改属性
console.log("读取 a:", p1.a); // 输出: 1
console.log("读取 address:", p1.address); // 输出: street

// 通过 setter 修改属性
p1.a = 100;
p1.address = "Broadway";

console.log("修改后读取 a:", p1.a); // 输出: 100
console.log("修改后读取 address:", p1.address); // 输出: Broadway
