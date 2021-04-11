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
let [str0, str1, str2, str3] = ['{([])}', '{}()[]', '([{]])', '[}']

console.log(bracketsMatch(str0)); // true
console.log(bracketsMatch(str1)); // true
console.log(bracketsMatch(str2)); // false
console.log(bracketsMatch(str3)); // false

