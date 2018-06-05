'use strict';

var lib = require('./lib')

module.exports = lib


// parseDate(time)       2018-01-01
// parseDatetime(time)   2018-01-01  12:00:00
// getEndWeek(time)      返回指定日期前一周的星期list   eg:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// getMonDatetime)       返回指定日期所在周的周一的日期
// getSunDate(time)      返回指定日期所在周的周天的日期
// formatJsAdd(a,b)      修正JS浮点数相加乱格式  
// formatRmbNum(num)     金钱格式数字千位加逗号 45,230
// deepClone(obj)        深度复制/clone
// indexOfArray(value,array,name = 'name')   返回array数组中key值为name(默认为'name')对应的val值==value的索引值
