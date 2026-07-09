let s = 'Hello World!'

// 字符串截取方法示例
// substring() 和 slice() 方法的对比
s.substring(1, 5) // 'ello' - 从索引1开始截取到索引5(不包含5)，返回'ello'
s.substring(5, 1) // 'ello' - 当start > end时，substring会自动交换两个参数的位置，效果等同于substring(1, 5)
s.substring(5) // ' World!' - 从索引5开始截取到字符串末尾，返回' World!'
s.substring(-3) // 'Hello World!' - substring会将负数参数视为0，因此返回整个字符串

s.slice(1, 5) // 'ello' - 从索引1开始截取到索引5(不包含5)，返回'ello'
s.slice(5, 1) // '' - 当start > end时，slice返回空字符串，这与substring不同
s.slice(5) // ' World!' - 从索引5开始截取到字符串末尾，返回' World!'
s.slice(-1) // '!' - 从字符串末尾开始截取一个字符，返回'!'
s.slice(-5) // 'orld!' - 从字符串末尾开始截取5个字符，返回'orld!'
s.slice(-4, -2) // 'rl' - 从字符串末尾开始截取，从倒数第4个字符到倒数第2个字符(不包含倒数第2个字符)，返回'rl'
s.slice(-2, -4) // '' - 当start > end时，slice返回空字符串，这与substring不同

s.indexOf('o') // 4 - 返回字符'o'在字符串中第一次出现的索引位置，返回4
s.indexOf('o', 5) // 7 - 从索引5开始查找字符'o'，返回字符'o'在字符串中第一次出现的索引位置，返回7
s.indexOf('o', 8) // -1 - 从索引8开始查找字符'o'，返回-1，表示字符'o'不在字符串中
s.indexOf('ell') // 1 - 返回子字符串'ell'在字符串中第一次出现的索引位置，返回1
s.indexOf('ll', 3) // -1 - 从索引3开始查找子字符串'll'，返回-1，表示子字符串'll'不在字符串中
s.indexOf('z') // -1 - 返回字符'z'在字符串中第一次出现的索引位置，返回-1，表示字符'z'不在字符串中

s.split() // ['Hello World!'] - 不传入参数时，split会将整个字符串作为一个元素返回数组，返回['Hello World!']
s.split(' ') // ['Hello', 'World!'] - 根据空格将字符串分割成数组，返回['Hello', 'World!']
s.split('o') // ['Hell', ' W', 'rld!'] - 根据字符'o'将字符串分割成数组，返回['Hell', ' W', 'rld!']
s.split('l') // ['He', '', 'o Wor', 'd!'] - 根据字符'l'将字符串分割成数组，返回['He', '', 'o Wor', 'd!']，注意连续的'l'会产生空字符串元素
s.split('') // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!'] - 根据每个字符将字符串分割成数组，返回['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!']
s.split('z') // ['Hello World!'] - 根据字符'z'将字符串分割成数组，返回['Hello World!']，因为字符'z'不在字符串中，所以返回整个字符串作为一个元素
s.split('H') // ['', 'ello World!'] - 根据字符'H'将字符串分割成数组，返回['', 'ello World!']，因为字符'H'在字符串中，所以返回两个元素，第一个元素为空字符串，第二个元素为剩余的字符串
s.split('!') // ['Hello World', ''] - 根据字符'!'将字符串分割成数组，返回['Hello World', '']，因为字符'!'在字符串中，所以返回两个元素，第一个元素为剩余的字符串，第二个元素为空字符串
s.split('e',3) // ['H', 'llo', ' World!'] - 根据字符'e'将字符串分割成数组，最多分割3次，返回['H', 'llo', ' World!']
s.split('e',0) // ['Hello World!'] - 根据字符'e'将字符串分割成数组，最多分割0次，返回['Hello World!']

s.lastIndexOf('o') // 7 - 返回字符'o'在字符串中最后一次出现的索引位置，返回7
s.lastIndexOf('o', 5) // 4 - 从索引5开始向前查找字符'o'，返回字符'o'在字符串中最后一次出现的索引位置，返回4
s.lastIndexOf('o', 3) // -1 - 从索引3开始向前查找字符'o'，返回-1，表示字符'o'不在字符串中
s.lastIndexOf('ell') // 1 - 返回子字符串'ell'在字符串中最后一次出现的索引位置，返回1
s.lastIndexOf('ll', 3) // 2 - 从索引3开始向前查找子字符串'll'，返回子字符串'll'在字符串中最后一次出现的索引位置，返回2
s.lastIndexOf('z') // -1 - 返回字符'z'在字符串中最后一次出现的索引位置，返回-1，表示字符'z'不在字符串中
s.lastIndexOf('') // 9 - 返回空字符串在字符串中最后一次出现的索引位置，返回9

s.includes('o') // true - 判断字符串中是否包含字符'o'，返回true
s.includes('z') // false - 判断字符串中是否包含字符'z'，返回false
s.includes('ell') // true - 判断字符串中是否包含子字符串'ell'，返回true
s.includes('ll', 3) // false - 从索引3开始判断字符串中是否包含子字符串'll'，返回false
s.includes('') // true - 判断字符串中是否包含空字符串，返回true
s.includes('Hello World!') // true - 判断字符串中是否包含整个字符串，返回true
s.includes('Hello World!', 0) // true - 从索引0开始判断字符串中是否包含整个字符串，返回true
s.includes('Hello World!', 1) // false - 从索引1开始判断字符串中是否包含整个字符串，返回false

s.padStart(15, '*') // '****Hello World!' - 在字符串前面填充字符'*'，直到字符串长度为15，返回'****Hello World!'
s.padEnd(15, '*') // 'Hello World!****' - 在字符串后面填充字符'*'，直到字符串长度为15，返回'Hello World!****'   
s.padStart(15, 'Hello') 
console.log(s.padStart(23,'#')) // '##########Hello World!' - 在字符串前面填充字符'#'，直到字符串长度为23，返回'##########Hello World!'

s.charAt(0) // 'H' - 返回字符串中索引为0的字符，返回'H'
s.charAt(5) // ' ' - 返回字符串中索引为5的字符，返回' '
s.charAt(10) // '!' - 返回字符串中索引为10的字符，返回'!'
s.charAt(15) // '' - 返回字符串中索引为15的字符，返回空字符串，因为字符串长度为11，索引为15超出字符串范围
s.charAt(-1) // '!' - 返回字符串中索引为-1的字符，返回字符串末尾的字符，返回'!'
s.charCodeAt(0) // 72 - 获取字符串中索引为0的字符的Unicode编码，返回72
s.codePointAt(0) // 72 - 获取字符串中索引为0的字符的Unicode编码，返回72
s.charCodeAt(5) // 32 - 获取字符串中索引为5的字符的Unicode编码，返回32
s.codePointAt(5) // 32 - 获取字符串中索引为5的字符的Unicode编码，返回32

s.replace('World', 'Universe') // 'Hello Universe!' - 将字符串中第一次出现的子字符串'World'替换为'Universe'，返回'Hello Universe!'
s.replace('l', 'b') // 'Heblo World!' - 将字符串中第一次出现的字符'l'替换为'b'，返回'Heblo World!'
s.replace('wq', 'Universe') // 'Hello World!' - 将字符串中第一次出现的子字符串'wq'替换为'Universe'，返回'Hello World!'，因为'wq'不在字符串中
s.replace('World', '') // 'Hello !' - 将字符串中第一次出现的子字符串'World'替换为空字符串，返回'Hello !'

const s2 = '  Hello World!  '
s2.trim() // 'Hello World!' - 去除字符串两端的空白字符，返回'Hello World!'
s2.trimStart() // 'Hello World!  ' - 去除字符串左侧的空白字符，返回'Hello World!  '
s2.trimEnd() // '  Hello World!' - 去除字符串右侧的空白字符，返回'  Hello World!'

