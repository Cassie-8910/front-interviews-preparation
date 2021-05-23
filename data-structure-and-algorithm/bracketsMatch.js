/**
 * 括号匹配
 * @param s
 * @returns {boolean}
 */
function bracketsMatch(s) {
    let stack = []

    s.split('').map(res => {
        if (res === '{' || res === '(' || res === '[') {
            stack.push(res)
        }
        let concatStr = stack[stack.length - 1] + res

        if (concatStr === '[]' || concatStr === '{}' || concatStr === '()') {
            stack.pop()
        }
    })
    return !stack.length
}


//优先级匹配 小括号()必须在最里面， [] {}
// function bracketsMatch1(s) {
//     let reg = /\(\)|\[\]|\{\}/g
//     while(reg.test(s)) {
//         s = s.replace(/\(\)|\[\]|\{\}/g, '')
//         console.log(s)
//     }
//     return !s.length
// }

let [str0, str1, str2, str3] = ['{([])}', '{}()[]', '([{]])', '[}']

console.log(bracketsMatch('{([])}')); // true
console.log(bracketsMatch('{}()[]')); // true
console.log(bracketsMatch('([{]])')); // false
console.log(bracketsMatch('[}')); // false

// console.log(bracketsMatch1(str0)); // true
// console.log(bracketsMatch1(str1)); // true
// console.log(bracketsMatch1(str2)); // false
// console.log(bracketsMatch1(str3)); // false
// console.log(bracketsMatch1('{[()]}'))

