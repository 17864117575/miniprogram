var app = getApp();
// 返回日期时间 YYYY-MM-DD HH:mm:ss
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

// 返回当前日期 YYYY-MM-DD
function formatDateForPicker(date, flag) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  // start -> 月初 / end -> 下月初 / else -> 当前日期
  if (flag === 'start') {
    return [year, month, 1].map(formatNumber).join('-')
  } else if (flag === 'end') {
    return [year, month + 1, 1].map(formatNumber).join('-')
  } else {
    return [year, month, day].map(formatNumber).join('-')
  }
}

// 返回当前时间 HH:mm:ss
function currentTime() {
  var date = new Date(Date.now());

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [hour, minute, second].map(formatNumber).join(':');
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 获取 x天前/后 的日期
function getDateByDays(days = 0) {
  var time = (new Date).getTime() + ((days) * 24 * 60 * 60 * 1000);
  var yesterday = new Date(time);
  return yesterday.getFullYear() + "-" + (yesterday.getMonth() > 9 ? (yesterday.getMonth() + 1) : "0" + (yesterday.getMonth() + 1)) + "-" + (yesterday.getDate() > 9 ? (yesterday.getDate()) : "0" + (yesterday.getDate()));
}

// 返回一个封装好的路径
function formatUrl(path, param) {
  let mainUrl = app.globalData.serverUrl + "/" + path;
  // 值为空 或者 对象为空时都要返回原字符串
  if (!param)
    return mainUrl;
  if (Object.keys(param) == 0)
    return mainUrl;

  let str = "";
  let index = 0;
  for (let key in param) {
    if (index == 0) {
      str += key + "=" + param[key]
    } else {
      str += "&" + key + "=" + param[key]
    }
    index++;
  }
  return mainUrl + "?" + str;
}

function formatParam(param) {
  let str = "";
  let idx = 0;
  for (let key in param) {
    if (idx == 0) {
      str += "?" + key + "=" + param[key];
    } else {
      str += key + "=" + param[key];
    }
  }
  return str;
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDateForPicker,
  currentTime: currentTime,
  getDateByDays: getDateByDays,
  formatUrl: formatUrl,
  formatParam: formatParam
}