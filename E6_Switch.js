let choice = +prompt('请输入一个数字(1-4):');

switch (choice) {
    case 1:
        console.log('您选择的是1')
        alert('您选择是1')
        break  // 退出switch
    case 2:
        console.log('您选择的是2')
        alert('您选择是2')
        break  // 退出switch
    case 3:
        console.log('您选择的是3')
        alert('您选择是3')
        break  // 退出switch
    case 4:
        console.log('您选择是4')
        alert('您选择是4')
        break  // 退出switch
    default:
        console.log('没有符合条件的')
        alert('没有符合条件的')

}