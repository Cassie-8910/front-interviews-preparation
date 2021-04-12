/**
 * 获取 url 中的参数
 1. 指定参数名称，返回该参数的值 或者 空字符串
 2. 不指定参数名称，返回全部的参数对象 或者 {}
 3. 如果存在多个同名参数，则返回数组
 * @param sUrl
 * @param sKey
 * @returns {string|{}|*[]|*}
 */
function getUrlParam(sUrl, sKey) {
    let sParam = sUrl.split("?")[1].split("#")[0];
    let arr = sParam.split("&");
    let res;
    if( sKey ){
        res = [];
        for( let i = 0; i < arr.length; i++ ){
            let temp = arr[i].split("=");
            if( temp[0] === sKey ){
                res.push( temp[1] );
            }
        }
        if( res.length === 1 ){
            return res[0];
        }else if( res.length === 0 ){
            return "";
        }else{
            return res;
        }

    }
    else{
        res = {};
        if( sParam === "" ){
            return res;
        }
        for( let i = 0; i < arr.length; i++ ){
            let temp = arr[i].split("=");
            if( !(temp[0] in res) ){
                res[temp[0]] = [];
            }
            res[temp[0]].push(temp[1]);
        }
        return res;
    }
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe','key'))
