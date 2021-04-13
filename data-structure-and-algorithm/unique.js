/**
 * 数组去重
 */

Array.prototype.uniq = function () {
    /* 法一： */
    //let arr = Array.from(new Set(this))
    //return arr

    /* 法二： */
    let newArr = []
    for(let i of this) {
        if(!newArr.includes(i)) {
            newArr.push(i)
        }
    }
    return newArr

    /* 法三： */
    // for(let i = 0; i < this.length; i++) {
    //     if(newArr.indexOf(this[i]) === -1) {
    //         newArr.push(this[i])
    //     }
    // }
    // return newArr
}

let arr = [1,2,5,3,3,2,6,7]
console.log(arr.uniq())

