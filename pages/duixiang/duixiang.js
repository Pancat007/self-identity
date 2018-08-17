//获取应用实例
const app = getApp()

// var util = require("../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    Question_Number2:"第二题",

    count: 1500,
    isShowToast: false,
    toastIcon: null,
    toastText: "default",


    first: "wow"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(app.globalData.userInfo.nickName + " 进入到第二题")

    this.setData({
      first: options.first
    })

    // 获取人物信息
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

  showToast: function(icon, toasttxt, time){
    var _this = this;
    //超时时间
    if (time) {
      _this.data.count = parseInt(time);
    }else{
      _this.data.count = 1500;
    }
    //更新数据
    _this.setData({
      isShowToast: true,
      toastIcon: icon,
      toastText: toasttxt
    });
    //设置自己的超时函数
    setTimeout(function () {
      _this.setData({
        isShowToast: false
      });
    }, _this.data.count);
  },


  second_yes:function() {
    console.log(app.globalData.userInfo.nickName + " 第二题 点击第一个按钮！（有对象）")

    this.showToast("icon-jiangbei", "恭喜！您已获得 \n“纵欲过度”\n 称号！","3200");
    
    var First = this.data.first
    
    setTimeout(
       function(e) {
          wx.redirectTo({
            url: "../millionaire/millionaire?" + 
            "first=" + First + "&" + 
            "second=" + "yes"
          }) 
        }, this.data.count
    )

  },

  second_no:function(e) {
    console.log(app.globalData.userInfo.nickName + " 第二题 点击第二个按钮！（没有对象）")

    this.showToast("icon-jiangbei", "恭喜！您已获得 \n“屌丝”\n 称号！","3200");
    
    var First = this.data.first

    setTimeout(
      function() {
          wx.redirectTo({
            url: "../millionaire/millionaire?" + 
            "first=" + First + "&" + 
            "second=" + "no"
          }) 
        }, this.data.count
    )

  },

  help_click: function(){
    // head.help_click();
    this.showToast("icon-yiwen", "就两个选项\n也不会选？", "1700");

    console.log(app.globalData.userInfo.nickName + " 第二题点击帮助！");
  }





})