//获取应用实例
const app = getApp()

var util = require("../../utils/util.js");
// var head = require("../header/header.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    Question_Number1:"第一题",

    count: 1500,
    isShowToast: false,
    toastIcon: null,
    toastText: "default"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(app.globalData.userInfo.nickName + " 进入到第一题")

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


  first_yes:function() {
    console.log(app.globalData.userInfo.nickName + " 第一题 点击第一个按钮！（好看）")
    // wx.showToast({
    //   title: "成功！",
    //   image: "../../lib/images/奖杯.png",
    //   duration: 1000,
    //   mask: true
    // })

    this.showToast("icon-jiangbei", "恭喜！您已获得 \n“厚颜无耻”\n 称号！","3200");
    // app.showToast("this", "icon-jiangbei", 
    //   "恭喜！您已获得 \n“厚颜无耻”\n 称号！","3200");

    // var util = require('../../utils/util.js')
    // util.showToast("this", "icon-jiangbei", 
    //   "恭喜！您已获得 \n“厚颜无耻”\n 称号！","3200")

    setTimeout(
      function() {
          wx.redirectTo({
            url: "../duixiang/duixiang?" + "first=yes"
          }) 
        }, this.data.count
    )

  },

  first_no:function(e) {
    console.log(app.globalData.userInfo.nickName + " 第一题 点击第二个按钮！（不好看）")

    this.showToast("icon-jiangbei", "恭喜！您已获得 \n“诚实正直”\n 称号！","3200");
    //3200
    setTimeout(
      function() {
          wx.redirectTo({
            url: "../duixiang/duixiang?" + "first=no"
          }) 
        }, this.data.count
    )

  },

  help_click: function(){
    // head.help_click();
    this.showToast("icon-yiwen", "这么简单的问题\n都要帮助？", "1700");

    console.log(app.globalData.userInfo.nickName + " 第一题点击帮助！");
  }




})