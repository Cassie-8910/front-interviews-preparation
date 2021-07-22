/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * s = "pwwkew"
 输出: 3
 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * @param s
 * @returns {number}
 */
function lengthofLongestSubstring(s) {
    let minIndex = 0
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        let t = s.indexOf(s[i], minIndex)
        // console.log('t:', t)
        if(t < i) {
            minIndex = t + i
        } else {
            ans = Math.max(ans, i - minIndex + 1)
        }
        // console.log('minIndex:', minIndex)
        // console.log('ans:',ans)
    }
    return ans
}

console.log(lengthofLongestSubstring('pwwkew'))
console.log(lengthofLongestSubstring('abcabcbb'))
