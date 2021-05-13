/**
 * '2021-3-28~2021-4-1'
 * ['2021-3-28', '2021-3-29', '2021-3-30','2021-3-31','2021-4-1']
 * @param str
 */
function rangeDay(str) {
    let res = []
    let inputDate = str.split('~')
    let date1 = new Date(inputDate[0])
    let date2 = new Date(inputDate[1])
    let oneDay = 24 * 60 * 60 * 1000
    let startTime = date1.getTime()
    let range = date2.getTime() - startTime
    let total = 0

    while (total <= range && range > 0) {
        res.push(new Date(startTime + total).toLocaleDateString().replace(/\//g, '-'))
        total += oneDay
    }
    return res
}

console.log(rangeDay('2021-3-28~2021-4-3'))
