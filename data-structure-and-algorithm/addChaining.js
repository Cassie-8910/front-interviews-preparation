/**
 * add(1).valueof() => 1
 * add(1)(2).valueof() => 3
 * add(1)(2).valueof(4) => 3
 * @param num
 * @returns {function(*): *}
 */
function add(num) {
    function fn(num1) {
        num += num1
        return fn
    }
    fn.valueOf = function () {
        return num
    }
    return fn
}

console.log(add(1).valueOf())
console.log(add(1)(2).valueOf())
console.log(add(1)(2).valueOf(4))
