/**
 *  快排
 * @param arr
 * @returns {*}
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];  //从数组中取出我们的"基准"元素
    arr.shift()
    const left = [], right = [];
    arr.forEach(item => {
        if (item < pivot) {  //left 存放比 pivot 小的元素
            left.push(item);
        } else {  //right 存放大于或等于 pivot 的元素
            right.push(item);
        }
    });
    //至此，我们将数组分成了left和right两个部分
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([23,12,45,89,56,71,32,18]))
