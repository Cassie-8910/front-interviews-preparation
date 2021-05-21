/**
 * 去掉字符串中的空字符
 * */
function trim(str) {
    let reg = /\s*/g
    str = str.replace(reg,'')
    return str
}

function trim1(str) {
    let arr = str.split(' ')
    console.log(arr)
    return arr.join('')
}

console.log(trim(' 123 1455 244 '))
console.log(trim1(' 123 1455 244 '))
