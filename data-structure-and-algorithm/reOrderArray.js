function reOrderArray( array ) {
    // write code here
    let odd = []
    let even = []
    array.map(x => {
        if(x % 2 !== 0) {
            odd.push(x)
        } else {
            even.push(x)
        }
    })
    let res = odd.concat(even)
    return res
}

console.log(reOrderArray([1,2,3,4]))
