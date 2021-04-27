/**
 * 函数 useArguments 可以接收 1 个及以上的参数。
 * 请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。
 * @returns {number}
 */
function useArguments() {
    // let args = arguments
    // console.log(args)
    // let sum = 0
    // for(let i of args) {
    //     sum += i
    // }
    // return sum

    let args = Array.from(arguments) // 将类数组转化为数组
    return args.reduce((pre, cur) => pre+cur)
}

console.log(useArguments(1,2,3,4)) // 10
