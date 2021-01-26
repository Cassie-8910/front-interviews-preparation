/**
 * 输入："nowcoder. a am I"
 * 输出： "I am a nowcoder."
 * @param str
 * @returns {string}
 * @constructor
 */
function ReverseSentence(str)
{
    // write code here
    return str.split(" ").reverse().join(" ");
}
