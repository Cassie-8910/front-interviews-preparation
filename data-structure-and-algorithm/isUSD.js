function isUSD(str) {
    let reg = /^\$(0|[1-9]\d{0,2})(,\d{3})*(\.\d{2})?$/
    return reg.test(str)
}

console.log(isUSD('$1,224,758.23'))
