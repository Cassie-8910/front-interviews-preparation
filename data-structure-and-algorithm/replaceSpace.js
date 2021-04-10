/**
 * 替换空格：将一个字符串中的每个空格替换成“%20”
 * @param s
 * @returns {*}
 */

// 方法一
function replaceSpace1(s) {
    // write code here
    return s.replace(/ /g, '%20')
}

// 方法二
function replaceSpace2(s) {
    let newArr = []
    let arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            newArr.push('%20')
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr.join('')
}

// 方法三
function replaceSpace3( s ) {
    return s.split(' ').join('%20')
}

console.log(replaceSpace1("We Are Happy")) //We%20Are%20Happy
console.log(replaceSpace2("We Are Happy")) //We%20Are%20Happy
console.log(replaceSpace3("We Are Happy")) //We%20Are%20Happy
