/**
 * 1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
 * 2. -webkit-border-image 转换后的结果为 webkitBorderImage
 * @param sName
 * @returns {string}
 */
function cssStyle2DomStyle(sName) {
    let arr = sName.split('-')
    console.log(arr)
    for(let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
    }
    return arr.join('')
}

console.log(cssStyle2DomStyle('font-size'))
