/**
 * 定义一个名为myFunction的函数，用于计算两个参数的和
 * @param {number} x - 第一个加数，默认值为0
 * @param {number} y - 第二个加数，默认值为0
 */
function myFunction(x,y) {
    x=x||0; // 如果x为undefined、null、""、0或false等假值，则将其设置为0
    y=y||0; // 如果y为undefined、null、""、0或false等假值，则将其设置为0
    console.log(x+y); // 输出x和y的和
}
myFunction(5,10); // 输出 15

