/**
 * 双层循环示例程序
 * 用于模拟多天内每天学习多个单词的场景
 */
let wordCount = 4; // 每天要学习的单词数量
let days = 3;     // 学习的天数

console.log(`Studying ${wordCount} words per day for ${days} days.`);
// 外层循环：遍历每一天
for (let i = 0; i < days; i++) {
    console.log(`Day ${i + 1}:`);  // 输出当前是第几天
    // 内层循环：遍历每一天的单词
    for (let j = 0; j < wordCount; j++) {
        console.log(`Word ${j + 1} of day ${i + 1}`);  // 输出当前是第几个单词
    }
}
//计算并打印出总单词数
let totalWords = days * wordCount; // 计算总单词数
console.log(`Total words learned: ${totalWords}`); // 打印总单词数

console.log("Generating multi-dimensional array...");
//生成类似效果的多维数组并打印出来
let dayArray = []; // 创建一个空数组用于存储单词
// 外层循环：遍历每一天
for (let i = 0; i < days; i++) {
    let wordArray = []; // 创建一个空数组用于存储当前天的单词
    // 内层循环：遍历每一天的单词
    for (let j = 0; j < wordCount; j++) {
        wordArray.push(`Day${i + 1} Word${j + 1}`); // 将单词添加到当前天的单词数组中
    }
    dayArray.push(wordArray); // 将当前天的单词数组添加到总单词数组中
}
console.log(dayArray); // 打印生成的多维数组

//traverse the multi-dimensional array and print each word
/**
 * 遍历二维数组dayArray并打印每个元素
 * 使用双重循环结构，外层循环遍历行，内层循环遍历列
 */
console.log("Traversing multi-dimensional array...");
for (let i = 0; i < dayArray.length; i++) {  // 外层循环，控制行索引i从0到dayArray.length-1
    for (let j = 0; j < dayArray[i].length; j++) {  // 内层循环，控制列索引j从0到当前行的长度-1
        console.log(dayArray[i][j]);   // 打印当前行和列对应的元素
    }
}