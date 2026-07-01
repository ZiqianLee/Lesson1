// 第一个循环示例：使用continue语句跳过特定迭代
for(let i = 0; i < 5; i++) {  // 初始化i为0，当i小于5时执行循环，每次循环后i自增1
    if(i === 3) {  // 检查i是否等于3
        console.log("i等于3，跳过当前循环的剩余部分,continue下一次循环");  // 输出提示信息，说明即将跳过当前循环的剩余部分
        continue;  // 当i等于3时，跳过当前循环的剩余部分，继续下一次循环    
    }
    console.log(i);  // 输出当前i的值（当i不等于3时）
}
console.log("---------------------");  // 输出分隔线，用于区分两个循环的输出


// 第二个循环示例：使用break语句终止循环
for(let i = 0; i < 5; i++) {  // 初始化i为0，当i小于5时执行循环，每次循环后i自增1
    if(i === 3) {  // 检查i是否等于3
        console.log("i等于3，跳出后续所有循环");  // 输出提示信息，说明即将跳出循环
        break;  // 当i等于3时，跳出当前循环
    }
    console.log(i);  // 输出当前i的值（当i小于3时）
}

/* 
endless loop example: using for(;;) to create an infinite loop
for(;;){
    console.log("循环");
} 
*/