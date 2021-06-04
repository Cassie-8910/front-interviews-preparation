/**
 *  * 给定两个有序数组(从小到大)nums1和nums2，他们的大小分别为m和n，找出两个数组合并后的中位数，注意优化代码性能。
 * @param num1
 * @param m
 * @param num2
 * @param n
 * @returns {number}
 */
function findMiddleNum(num1, m, num2, n) {
    let num3 = new Array(m + n)
    let i = 0, j = 0, k = 0
    while (i < m && j < n) {
        if (num1[i] < num2[j]) {
            num3[k] = num1[i]
            i++
            k++
        } else {
            num3[k] = num2[j]
            j++
            k++
        }
    }
    while (i < m) {
        num3[k] = num1[i]
        i++
        k++
    }
    while (j < n) {
        num3[k] = num1[j]
        j++
        k++
    }
    let middle
    if ((m + n) % 2 === 0) {
        middle = (num3[(m + n) / 2] + num3[(m + n) / 2 - 1]) / 2
    } else {
        middle = num3[Math.floor((m + n) / 2)]
    }
    return middle
}

console.log(findMiddleNum([1, 2], 2, [3, 4], 2))
