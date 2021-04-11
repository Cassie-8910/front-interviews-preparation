function getNumsAppearOnceTwo( arr ) {
    // write code here
    let obj = {}
    for(let i = 0; i < arr.length; i++) {
        if(obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }
    console.log(obj)
    let res = []
    for(let i in obj) {
        if(obj[i] === 1){
            res.push(Number(i))
        }
    }
    console.log(res)
}

getNumsAppearOnceTwo( [1,3,5,7,1,3,5,9,6,10,6,7] )
