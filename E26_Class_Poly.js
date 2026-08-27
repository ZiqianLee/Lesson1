// ==============================
// 1. 定义类（Person 与 Dog）
// ==============================

// 定义“人”类
class Person {
  constructor(name, age, city, country) {
    this.name = name; // 姓名
    this.age = age; // 年龄
    this.city = city; // 城市
    this.country = country; // 国家
  }
}

// 定义“狗”类
class Dog {
  constructor(name, age, breed, color) {
    this.name = name; // 名字
    this.age = age; // 年龄
    this.breed = breed; // 品种
    this.color = color; // 颜色
  }
}

// ==============================
// 2. 创建对象实例
// ==============================
const P1 = new Person("Jason", 28, "Toronto", "Canada");
const D1 = new Dog("Buddy", 3, "Golden Retriever", "Golden");
const D2 = new Dog("Lucy", 2, "German Shepherd", "Black");
// const C1 = new Cat("Mimi", 1, "British Shorthair", "White");  // 注意：Cat是未定义的，这会导致ReferenceError

// 将不同类型的对象放入同一个数组中统一管理
const list = [P1, D1, D2];

// ==============================
// 3. 多态的应用示例 1：统一接口处理不同类型的对象
// ==============================
/**
 * 打印对象信息
 * 思想：调用者传入任意对象，函数内部通过 instanceof 区分类型并执行对应逻辑。
 * （多态的核心思想：同一函数/操作，作用于不同的对象类型时呈现不同的行为）
 */
function printObjects(obj) {
  console.log("obj:", obj.name); // 获取对象名称

  if (obj instanceof Person) {
    console.log(obj.name + " is a person");
  } else if (obj instanceof Dog) {
    console.log(obj.name + " is a dog");
  } else {
    console.log(obj.name + " is an unknown type");
  }
}

// 遍历列表：list 里的元素类型不同（Person / Dog），但都可以传给 print 执行
console.log("========= list.forEach(printObjects) =========");
list.forEach(printObjects);

// ==============================
// 4. 多态的应用示例 2：多参数打印
// ==============================
/**
 * 接收不同对象作为参数，按各自的属性输出
 */
function printAll(obj1, obj2, obj3, obj4) {
  console.log(obj1);
  console.log(
    obj2.name + " is a " + obj2.breed + " of " + obj2.age + " years old",
  );
  console.log(obj3.name + " is a " + obj3.city + " of " + obj3.country);
}

console.log("========= printAll(P1, D1, D2) =========");
printAll(P1, D1, D2);
