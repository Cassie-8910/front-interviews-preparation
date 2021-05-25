let longestCommonPrefix = function(arr) {
    if(arr.length) {//判断数组是否为空
        let res = ""; //记录公共前缀
        for(let i = 0; i < arr[0].length; i++) {
            let temp = arr[0][i];
            //每个字符串是否都有相同的字符
            if(arr.every(el => {
                return el.charAt(i) == temp;
            })) {
                res += temp; //记录公共前缀
            } else
                break; //如果返回false，就停止判断，说明不是前缀了
        }
        return res;
    }
    return ""; //说明是空数组
};

function longestCommonPrefix1 (strs) {
    if(!strs.length) return '';
    let [a, ...b] = strs;
    console.log(a)
    console.log(b)
    let result = '';
    for(let i = 0; i < a.length; i++){
        let flag = b.every(item => item[i] === a[i]);
        if(flag) result += a[i];
        else break;
    }
    return result;
}


console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix1(['flower', 'flow', 'flight']))
