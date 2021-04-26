function count(str) {
    let obj = {}
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== ' ') {
            if(obj[str[i]]) {
                obj[str[i]]++
            } else {
                obj[str[i]] = 1
            }
        }
    }
    return obj
}

console.log(count('hello world'))
