//the page prompt the user to input a number, and then use a while loop to get the 
// sum of all the even numbers from 1 to the number and show an alert with the sum。
let choiceEven = Number(prompt('请输入一个数字:'));
let sum = 0;
let i = 0;
while (i <= choiceEven) {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}
alert('从 1 到 ' + choiceEven + ' 的和是: ' + sum);


/* let choice2 = +prompt('请输入一个数字:');
let sum = 0;
let i = 1;
while (i <= choice2) {
    sum += i;
    i++;
}
alert('从 1 到 ' + choice2 + ' 的和是: ' + sum); */