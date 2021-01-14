/**
 * @param {number[]} A
 * @return {boolean[]}
 * 给定由若干0和1组成的数组 A。我们定义N_i：从A[0] 到A[i]的第 i个子数组被解释为一个二进制数（从最高有效位到最低有效位）。
 * 返回布尔值列表answer，只有当N_i可以被 5整除时，答案answer[i] 为true，否则为 false。
 * 输入：[0,1,1]
 * 输出：[true,false,false]
 * 解释：
 * 输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真。
 */
var prefixesDivBy5 = function(A) {
    let prefixes = 0
    let answer = []
    for(let i=0; i<A.length; i++) {
        prefixes = ((prefixes << 1) + A[i]) % 5
        answer.push(prefixes === 0)
    }
    return answer
};
