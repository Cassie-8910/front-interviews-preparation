/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 以下代码时间复杂度O(n) 空间复杂度O(n)
 */
var rotate = function(nums, k) {
    let arr = new Array(nums.length);
    for(let i=0; i<nums.length; i++) {
        if(i+k < nums.length) {
            arr[i+k] = nums[i];
        } else {
            let index = (i+k) % (nums.length);
            arr[index] = nums[i];
        }
    }
    for(let j=0;j<nums.length;j++){
        nums[j] = arr[j];
    }
};
