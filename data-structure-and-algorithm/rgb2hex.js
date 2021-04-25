/**
 * 将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
 1. rgb 中每个 , 后面的空格数量不固定
 2. 十六进制表达式使用六位小写字母
 3. 如果输入不符合 rgb 格式，返回原始输入
 * @param sRGB
 * @returns {string|*}
 */
function rgb2hex(sRGB) {
    let req = /^rgb\((\d+,\s*)(\d+,\s*)(\d+)\)$/
    if(!req.test(sRGB)) {
        return sRGB
    }
    let str = '#'
    let arr = sRGB.replace(/(rgb|\(|\))/g, '').split(',')
    for(let i = 0 ;i<arr.length; i++) {
        str += ('0' + parseInt(arr[i]).toString(16)).slice(-2)
    }
    return str
}

console.log(rgb2hex('rgb(255, 255, 255)'))
console.log(rgb2hex('rgb(128,54,200)'))

