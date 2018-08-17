// const formatTime = date => {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// const formatNumber = n => {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

// module.exports = {
//   formatTime: formatTime
// }

// function showToast(that, icon, toasttxt, time){
//   var _this = that;
//   //超时时间
//   if (time) {
//     _this.data.count = parseInt(time);
//   }else{
//     _this.data.count = 1500;
//   }
//   //更新数据
//   _this.setData({
//     isShowToast: true,
//     toastIcon: icon,
//     toastText: toasttxt
//   });
//   //设置自己的超时函数
//   setTimeout(function () {
//     _this.setData({
//       isShowToast: false
//     });
//   }, _this.data.count);
// }

// module.exports = {
//   showToast: showToast
// }