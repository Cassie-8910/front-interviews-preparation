/**
 * 千位逗号分隔
 * @param num
 * @returns {string}
 */
function changeToString(num) {
    let res = ''
    let index = 0
    let str = num + ''
    let len = str.length-1
    while(len >= 0) {
        if(index%3 === 0 && index!==0) {
            res = (',' + str[len])
        } else {
            res += str[len]
        }
        len--
        index++
    }
    return res.split('').reverse().join('')
}

console.log(changeToString(1234567))
console.log(changeToString(100000000))
