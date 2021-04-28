/**
 * 实现函数 callIt，调用之后满足如下条件
 1、返回的结果为调用 fn 之后的结果
 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
 * @param fn
 * @returns {*}
 */
function callIt(fn) {
    let args = Array.from(arguments).slice(1)
    console.log(args)
    return fn.apply(this, args)
}


    let a = 1
    let b = 2
    let c = 3
    let test = function(first, second, third) {
        return first === a && second === b && third === c
    }
    console.log(callIt(test, a, b, c))

