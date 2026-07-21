function hypotenuse(a, b) {
  function square(x) {
    return x * x;
  }
  return Math.sqrt(square(a) + square(b));
}
hypotenuse(3, 4);

// console.log(a); // ReferenceError: a is not defined
// a = 10;
// console.log(a); // 输出 10，a被提升为全局变量
