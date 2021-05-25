/**
 * 数组中重复的元素
 * @param arr
 */
function findRepeatNum(arr) {
    let newArr = []
    arr.sort().sort((a,b) => {
        if(a===b && !newArr.includes(a)) {
            newArr.push(a)
        }
    })
    return newArr
}

console.log(findRepeatNum([1,1,2,3,4,5,3,4,7]))
