
/**
 * 演示闭包和setTimeout异步执行的示例
 * 循环创建三个定时器，每个定时器在不同的延迟时间后输出对应的循环索引值
 */
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    // 输出当前循环变量i的值（0, 1, 2）
    console.log(i);
  }, (i+1)*2000); // 延迟时间为(i+1)*2000毫秒（2秒、4秒、6秒）
}

/**
 * 使用var和立即执行函数（IIFE）来模拟let的行为
 * 解决了在循环中使用setTimeout时常见的闭包问题
 * 在传统的var循环中，所有setTimeout回调都会共享同一个变量i
 * 使用IIFE为每次迭代创建一个独立的作用域，保存当前的索引值
 */
for (var i = 0; i < 3; i++) {
  /**
   * 立即执行函数（IIFE）创建了一个新的作用域
   * 将当前循环的索引值作为参数传递给函数，确保每个setTimeout都能访问到正确的值
   * @param {number} index - 当前循环的索引值（0, 1, 2）
   */
  (function(index) {
    setTimeout(() => {
      // 输出当前迭代的索引值，由于IIFE捕获了index值，所以能正确输出0, 1, 2
      console.log(index);
    }, (index+1)*2000); // 设置不同的延迟时间：2秒、4秒、6秒
  })(i);
} 