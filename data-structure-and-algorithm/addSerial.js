/**
 * ['ab', 'c', 'd', 'ab', 'c'] 输出 [ 'ab1', 'c1', 'd', 'ab2', 'c2' ] 相对顺序不变
 * @param arr
 * @returns {[]}
 */
function addSerial(arr) {
    let result = []
    let temp = {}
    for(let i = 0; i < arr.length; i++) {
        if(temp[arr[i]]) {
            temp[arr[i]]++
        } else {
            temp[arr[i]] = 1
        }
        result.push(`${arr[i]}${temp[arr[i]]}`)
    }
    arr.forEach((item, index) => {
        if(temp[item] < 2) {
            result[index] = item
        }
    })
    return result
}

console.log(addSerial(['ab', 'c', 'd', 'ab', 'c']))
