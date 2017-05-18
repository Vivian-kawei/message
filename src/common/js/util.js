let formatTimeInterval = (str) => {
  if (!str) return ''
  let date = new Date(str)
  let time = new Date().getTime() - date.getTime() // 现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
    return ''
  } else if ((time / 1000) < 30) {
    return '刚刚'
  } else if ((time / 1000) < 60) {
    return parseInt(time / 1000) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt(time / 60000) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(time / 3600000) + '小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(time / 86400000) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(time / 2592000000) + '月前'
  } else {
    return parseInt(time / 31536000000) + '年前'
  }
}

let formatDate = (date, format, datePipe = '-', timePipe = ':') => {
  let ret = null
  let oDate = date ? oDate = new Date(date) : new Date()
  let Y = oDate.getFullYear()
  let M = oDate.getMonth() + 1
  let D = oDate.getDate()
  let H = oDate.getHours()
  let I = oDate.getMinutes()
  let S = oDate.getSeconds()
  let c = function (a, pipe) {
    let arr = []
    for (let i = 0, len = a.length; i < len; i++) {
      let x = a[i]
      x = x < 10 ? '0' + x : x
      arr.push(x)
    }
    return arr.join(pipe)
  }
  switch (format) {
    case 'YM':
      ret = c([Y, M], datePipe)
      break
    case 'MD':
      ret = c([M, D], datePipe)
      break
    case 'HI':
      ret = c([H, I], timePipe)
      break
    case 'HIS':
      ret = c([H, I, S], timePipe)
      break
    case 'IS':
      ret = c([I, S], timePipe)
      break
    case 'YMD':
      ret = formatDate(oDate, 'YMD', datePipe)
      break
    case 'YMDHI':
      ret = formatDate(oDate, 'YMD', datePipe) + ' ' + formatDate(oDate, 'HI', '', timePipe)
      break
    case 'MDHI':
      ret = formatDate(oDate, 'MD', datePipe) + ' ' + formatDate(oDate, 'HI', '', timePipe)
      break
    case 'YMDHIS':
      ret = formatDate(oDate, 'YMD', datePipe) + ' ' + formatDate(oDate, 'HIS', '', timePipe)
      break
    default:
      ret = c([Y, M, D], datePipe)
  }
  return ret
}
export { formatTimeInterval, formatDate }
