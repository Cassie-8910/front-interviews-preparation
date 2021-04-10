/**
 * 输入一个整数，输出该数32位二进制表示中1的个数。其中负数用补码表示。
 * 让 n 与 n-1 按位相与 结果赋给 n ， 知道 n = 0推出循环 记录相与的次数
 * @param n
 * @returns {number}
 * @constructor
 */
function NumberOf1(n)
{
    // write code here
    let count = 0
    while(n) {
        n = n & (n-1)
        count ++
    }
    return count
}

console.log(NumberOf1(14))
