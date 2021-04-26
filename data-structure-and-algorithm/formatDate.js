function formatDate(time, str) {
    let obj = {
        yyyy: time.getFullYear(),
        yy: ('' + time.getFullYear()).substring(2),
        MM: (time.getMonth() + 1) > 9 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1),
        M: time.getMonth() + 1,
        dd: time.getDate() > 9 ? time.getDate() : '0' + time.getDate(),
        d: time.getDate(),
        HH: time.getHours() > 9 ? time.getHours() : '0' + time.getHours(),
        H: time.getHours(),
        hh: time.getHours() % 12 > 9 ? time.getHours() % 12 : '0' + (time.getHours() % 12),
        h: time.getHours() % 12,
        mm: time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes(),
        m: time.getMinutes(),
        ss: time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds(),
        s: time.getSeconds(),
        w: ['日','一','二','三','四','五','六'][time.getDay()]
    }
    for(let i in obj) {
        str = str.replace(i, obj[i])
    }
    return str
}

console.log(formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w'))
