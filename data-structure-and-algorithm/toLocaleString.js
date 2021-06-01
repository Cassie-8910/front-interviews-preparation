/**
 * 给数字每三位加逗号
 * @param num
 * @returns {string}
 */
function toLocaleString(num) {
    let res = ''
    let counter = 0
    num = num.toString()
    for (let i = num.length - 1; i >= 0; i--) {
        counter++
        res = num.charAt(i) + res
        if (!(counter % 3) && i !== 0) {
            res = ',' + res
        }
    }
    return res
}

console.log(toLocaleString(10000000))
console.log(toLocaleString(1334566579))
