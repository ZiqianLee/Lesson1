/**
 * 定义一个类 P
 * ES6 引入的 class 语法是基于原型的面向对象模式的语法糖。
 */
class P {
  // 私有属性（Private Field）：以 # 开头，只能在类的内部被访问和修改，外部无法直接访问
  #address = "street";

  /**
   * 构造函数：用于在创建对象实例（new P(...)）时初始化对象的属性
   * @param {*} a 
   * @param {*} b 
   * @param {*} c 
   */
  constructor(a, b, c) {
    // 公共属性：通过 this 绑定到新创建的实例对象上
    this.a = a;
    this.b = b;
    this.c = c;
  }

  // 实例方法：定义在 P.prototype 原型对象上，所有实例共享该方法
  thisA() {
    console.log(this.a);
  }

  thisB() {
    console.log(this.b);
  }

  thisC() {
    console.log(this.c);
  }
}

// 实例化：使用 new 操作符调用构造函数，创建 P 的新实例 p1
const p1 = new P(1, 2, 3);

// 打印实例对象：输出包含公共属性 { a: 1, b: 2, c: 3 }
console.log(p1);

// 尝试在类外部访问私有属性：
// ❌ 会直接抛出语法错误（SyntaxError: Private field '#address' must be declared in an enclosing class）
// 私有属性受到语言级别的保护，不能在类外部通过实例直接读取或修改
// p1.#address;

