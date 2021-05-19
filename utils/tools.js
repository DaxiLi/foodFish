const 
getPastTime = function(date){
  var t = this.getTimeDifObj(date);
  if (t.Y != 0){
    return t.Y + "年"
  }else if (t.M != 0){
    return t.M + "个月";
  }else if (t.D != 0){
    return t.D + "天";
  }else if (t.h != 0){
    return t.h + "小时";
  }else if (t.m != 0){
    return t.m + "分钟";
  }else{
    return t.s + "秒";
  }
},
getTimeDifObj = function(date){
  if (!date) return date;
  if (!(date instanceof Date)) {
      date = new Date(date);
  }
  var p = {
    "Y": date.getFullYear(),
    "M":date.getMonth(),
    "D":date.getDate(),
    "h":date.getHours(),
    "m":date.getMinutes(),
    "s":date.getSeconds(),
  }
  var ndate = new Date();
  var n = {
    "Y":ndate.getFullYear(),
    "M":ndate.getMonth(),
    "D":ndate.getDate(),
    "h":ndate.getHours(),
    "m":ndate.getMinutes(),
    "s":ndate.getSeconds(),
  }
  console.log(p);
  return {
    "Y":ndate.getFullYear() - date.getFullYear(),
    "M":ndate.getMonth()-date.getMonth(),
    "D":ndate.getDate()-date.getDate(),
    "h":ndate.getHours()-date.getHours(),
    "m":ndate.getMinutes()-date.getMinutes(),
    "s":ndate.getSeconds()-date.getSeconds(),
  }
},
/**
 * 时间格式化
 * @param {*} date Date对象 或 时间戳
 * @param {*} fmt "yyyy-MM-dd hh:mm:ss"
 */
formatTime = function (date, fmt = "yyyy-MM-dd hh:mm:ss") {
  if (!date) return date;
  if (!(date instanceof Date)) {
      date = new Date(date);
  }
  var o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3) //季度
  };
  // 格式化年
  if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
  }
  // 格式化毫秒
  if (/(S+)/.test(fmt)) {
      const tmp = date.getMilliseconds();
      fmt = fmt.replace(
          RegExp.$1,
          ("000" + tmp).substr(("" + tmp).length)
      );
  }
  // 格式化其它
  for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
          );
      }
}
  return fmt;
},
getTimeRangeByUnit= function(timeValue, timeUnit) {
  let rangeArr = [];
  const start = new Date().getTime();
  const end = new Date().getTime();

  switch (timeUnit) {
      case "hours":
          rangeArr = [start - 3600 * 1000 * timeValue, end];
          break;
      case "day":
          rangeArr = [
              start - 3600 * 1000 * 24 * timeValue,
              end
          ];
          break;
      case "week":
          rangeArr = [
              start - 3600 * 1000 * 24 * 7 * timeValue,
              end
          ];
          break;
      case "month":
          rangeArr = [
              start - 3600 * 1000 * 24 * 30 * timeValue,
              end
          ];
          break;
      case "year":
          rangeArr = [
              start - 3600 * 1000 * 24 * 365 * timeValue,
              end
          ];
          break;
  }
  return rangeArr;
},urlFac = function (url) {
  return url.replace(new RegExp(/^(http|https):\/\/.*\..*\/upload\//g), "");
}

;
export{
  urlFac,
  getTimeRangeByUnit,
  formatTime,
  getPastTime,
  getTimeDifObj
}