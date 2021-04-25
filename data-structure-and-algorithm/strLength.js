/**
 * 如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
 * 否则如果字符 Unicode 编码 > 255 则长度为 2
 * @param s
 * @param bUnicode255For1
 * @returns {*}
 */
function strLength(s, bUnicode255For1) {
    if(bUnicode255For1) {
        return s.length
    } else {
        let len = s.length
        for(let i = 0; i<s.length; i++) {
            if(s.charCodeAt(i) > 255) {
                len++
            }
        }
        return len
    }
}

console.log(strLength('hello world, 牛客', false))
