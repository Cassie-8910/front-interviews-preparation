/**
 * 输出有序数组的中两个元素差值为指定值diff的两个元素
 * 思路：这与输出两个元素的和的值为一定值类似，需要两个指针，不同的是：指针不是一左一右，而是一前一后。
 * 如果差值等于diff，则返回；如果差值大于diff，则左指针右移；如果差值小于diff，则右指
 * @param arr
 * @param diff
 */
function findDiffNum(arr, diff) {
    let i = 0, j = 1
    let res = []
    while(i<j && j < arr.length) {
        if(arr[j] - arr[i] === diff) {
            console.log(arr[i],arr[j])
            // res.push(`(${arr[i]}, ${arr[j]})`)
        } else if(arr[j] - arr[i] > diff) {
            i++
        } else {
            j++
        }
    }
    return res
}

console.log(findDiffNum([1,2,3,6], 2))
