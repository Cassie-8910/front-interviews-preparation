/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 * 输入：A = [1,2,0,0], K = 34
 * 输出：[1,2,3,4]
 * 解释：1200 + 34 = 1234
 */
var addToArrayForm = function(A, K) {
    let result = []
    let len = A.length
    let num = 0
    for(let i = len-1; i >= 0; --i) {
        let sum = A[i] + K%10
        K = Math.floor(K/10)
        if(sum>=10) {
            sum -= 10
            K++
        }
        result.push(sum)
    }
    for(; K > 0; K = Math.floor(K/10)) {
        result.push(K % 10)
    }
    result.reverse()
    return result
};
