/**
 * 冒泡排序 时间复杂度O(n^2)
 * 每次比较两个相邻的元素，如果顺序错误就交换位置
 * @param arr
 * @returns {*}
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) { //外层循环
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([21, 11, 3, 25, 36, 18]))
