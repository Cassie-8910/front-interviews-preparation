/**
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 *  F(0) = 0，F(1)= 1
 *  F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 * 输入：4
 * 输出：3
 * 解释：F(4) = F(3) + F(2) = 2 + 1 = 3
 * 动态规划算法
 * @param {number} n
 * @return {number}
 */
let fib = function(n) {
    let dp = new Array(n);
    dp[0]=0;
    dp[1]=1;
    for(let i = 2;i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};
