/**
 * 合并两个有序数组
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 * @returns {*}
 */
function merge(nums1,m,nums2,n) {
    if(m < nums1.length) {
        nums1.splice(m, nums1.length-m)
    }
    nums1.push.apply(nums1, nums2)
    nums1.sort((a,b) => {
        return a-b
    })
    return nums1
}

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
