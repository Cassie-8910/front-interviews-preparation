/**
 * 找出数组中重复元素的最大出现次数
 * @param arr
 * @returns {{}}
 */
function getMaxRepeatNum(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] ++
        } else {
            obj[arr[i]] = 1
        }
    }
    let max
    for(let i in obj) {
        if(max) {
            if (obj[i] > obj[max]) {
                max = i
            }
        }else {
            max = i
        }
    }
    return obj[max]
}

console.log(getMaxRepeatNum([1, 1, 3, 6, 3, 4, 9, 5, 4, 2, 1]))
