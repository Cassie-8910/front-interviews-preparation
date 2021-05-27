/**
 * 数组中重复的元素
 * @param arr
 */
function findRepeatNum(arr) {
    let newArr = []
    console.log(arr.sort())
    arr.sort().sort((a,b) => {
        if(a===b && !newArr.includes(a)) {
            newArr.push(a)
        }
    })
    return newArr
}

console.log(findRepeatNum([23,31,45,23,18,20,45,26]))
