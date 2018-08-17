
// //获取应用实例
// const app = getApp()

 Page({ })
//   data: {
    
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo'),

//     Question_Number: "第零题",

//     count: 1500,
//     isShowToast: false,
//     toastIcon: null,
//     toastText: "default"

//   },


//   onLoad: function () {

//     console.log("进入到header")

//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })

//       console.log(app.globalData.userInfo)
//     } 

//     else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } 

//     else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }


//   },



//   showToast: function(icon, toasttxt, time){
//     var _this = this;
//     //超时时间
//     if (time) {
//       _this.data.count = parseInt(time);
//     }else{
//       _this.data.count = 1500;
//     }
//     //更新数据
//     _this.setData({
//       isShowToast: true,
//       toastIcon: icon,
//       toastText: toasttxt
//     });
//     //设置自己的超时函数
//     setTimeout(function () {
//       _this.setData({
//         isShowToast: false
//       });
//     }, _this.data.count);
//   },


// })


// function help_click() {
//   console.log("点！")
// }

// module.exports = {
//   help_click : help_click
// }

