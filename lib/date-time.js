'use strict';

module.exports.parseDate = function (time, cFormat) {
    if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        // a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d)+}/g, (result, key) => {
        let value = formatObj[key]
        // if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}

module.exports.parseDatetime = function (time, cFormat) {
    if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        // a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        // if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}

module.exports.getEndWeek = function (str) {    //返回这一周的星期，包含今天
    let num2Weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    let startDate = new Date(str)
    let nowDate = startDate.getDate()
    startDate.setDate(nowDate - 6)
    let fromDay = startDate.getDay() || 7
    let dateList = []
    for(let i in this.num2Weekday){
        let m = fromDay*1+i*1
        let str;
        m-=1
        if(m<=6){
        str = this.num2Weekday[m]
        }else{
        str = this.num2Weekday[m-7]
        }
        dateList.push(str)
    }
    return dateList
    console.log(dateList)
}

module.exports.getMonDate = function (str) {    //返回指定日期所在周的周一的日期
    let startDate = new Date(str)
    startDate.setHours(0)
    startDate.setMinutes(0)
    startDate.setSeconds(0)
    let nowDay = startDate.getDay() || 7
    let nowDate = startDate.getDate()
    startDate.setDate(nowDate + 1 - nowDay)
    console.log(startDate)
    return startDate
}

module.exports.getSunDate = function (str) {    //返回指定日期所在周的周日的日期
    let endDate = new Date()
    endDate.setHours(23)
    endDate.setMinutes(59)
    endDate.setSeconds(59)
    let nowDay = endDate.getDay() || 7
    let nowDate = endDate.getDate()
    endDate.setDate(nowDate + 7 - nowDay)
    console.log(endDate)
    return endDate
}
