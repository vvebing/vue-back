export const formatDate = (str) => {
  if (!str) return ''
  var date = new Date(str)
  var time = new Date().getTime() - date.getTime()
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt((time / 60000)) + '分钟前'
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

export const formatTabs = (tab) => {
  if (!tab) return ''
  if (tab === 'weex') {
    return 'weex'
  } else if (tab === 'share') {
    return '分享'
  } else if (tab === 'ask') {
    return '问答'
  } else if (tab === 'job') {
    return '招聘'
  }
}

export const formatComment = (val) => {
  return val.replace('<a href="/user', '<a href="#/user')
}
