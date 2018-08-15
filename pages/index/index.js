//index.js
//获取应用实例
const app = getApp()

Page({

  data: {

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')

  },


  onLoad: function () {

    console.log("进入到首页")

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } 
    
    else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } 
    
    else {

      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })


    }
  },


   //事件处理函数
  gotoFirstPage: function(e) {

    if (e.detail.userInfo) {

        console.log(e)
        console.log("点击进入按钮")

        app.globalData.userInfo = e.detail.userInfo
        this.setData({
          userInfo: e.detail.userInfo,
          hasUserInfo: true
        })

        console.log(app.globalData.userInfo)

        wx.navigateTo({
        url: '../handsome/handsome'
        })
        
        console.log("跳转到handsome页面")

    }

    else {}

  }


})
