//index.js
//获取应用实例
const app = getApp()

Page({

  data: {

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),


    IsShowRes: false,
    TestResult: "nothing to show!",

    first: null,
    second: null,
    third: null,

    IsRestart: false


  },


  onLoad: function (options) {

    console.log(app.globalData.userInfo.nickName + " 进入到结果页")


    this.setData({
      first: options.first,
      second: options.second,
      third: options.third
    })

    // console.log("first= " + this.data.first + 
    //             " second= " + this.data.second + 
    //             " third= " + this.data.third);

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



  showResult:function() {


    if (!this.data.IsRestart) {

          var conclude = "经过本系统精确的鉴定，\n 得出结论：\n\n";

          if (this.data.first === "yes" && this.data.second === "yes" && this.data.third === "yes") {
            this.data.TestResult = conclude + "你这个人不仅厚颜无耻，整天沉迷情色，而且时不时竟然还有一些不切实际的想法。"
            + " \n\n建议是： 请尽早就医。";
           }
          else if (this.data.first === "yes" && this.data.second === "yes" && this.data.third === "no") {
            this.data.TestResult = conclude + "你这个人不仅厚颜无耻，整天沉迷情色，竟然还是一条没有梦想的咸鱼！"
            + " \n\n建议是： 请投胎再来。";
          }
          else if (this.data.first === "yes" && this.data.second === "no" && this.data.third === "yes") {
            this.data.TestResult = conclude + "你这个人既然厚颜无耻，居然还找不到男/女朋友？可能就是因为你整天抱着一些不切实际的想法。"
            + " \n\n建议是：思想改造欢迎你。";
          }
          else if (this.data.first === "yes" && this.data.second === "no" && this.data.third === "no") {
            this.data.TestResult = conclude + "你这个人厚颜无耻，没有男/女朋友，活着却没有梦想。 如果我是你，我早就去自尽，人生重头再来了。"
            + " \n\n建议是：送你一瓶敌敌畏，来一场说走就走的旅行。";
          }
          else if (this.data.first === "no" && this.data.second === "yes" && this.data.third === "yes") {
            this.data.TestResult = conclude + "你为人诚实正直，是个好孩子。 无奈整天沉迷情色，脑袋里装着一些不知道什么东西，荒废人生。"
            + " \n\n建议是：“吾日三省吾身”     ---------《论语》。";
          }
          else if (this.data.first === "no" && this.data.second === "yes" && this.data.third === "no") {
            this.data.TestResult = conclude + "你为人诚实正直，是个好孩子。 却不知为何沉迷情色，活着却没有梦想，仿佛一具没有灵魂的躯壳。"
            + " \n\n建议是： 找回你的灵魂。";
          }
          else if (this.data.first === "no" && this.data.second === "no" && this.data.third === "yes") {
            this.data.TestResult = conclude + "你为人诚实正直，是个好孩子。 看似是屌丝，却心怀大梦，你就是千年一遇的奇才。"
            + " \n\n结论是：世界的未来掌舵人。";
          }
          else if (this.data.first === "no" && this.data.second === "no" && this.data.third === "no") {
            this.data.TestResult = conclude + "你为人诚实正直，是个好孩子。 虽然生活检点，却没有人生的目标，仿佛是在这个世界游离着的幽魂。"
            + " \n\n建议是： 找到你的梦。";
          }
          else {

          }


        


          // console.log(TestResult);
          console.log(this.data.TestResult);



          this.setData ({
            IsShowRes: true,
            TestResult: this.data.TestResult,
            IsRestart: true

          })

    }

    else {
      console.log(app.globalData.userInfo.nickName + " 点击我不服按钮。")
      wx.showModal({
        title: "我要重来！",
        content: "点击确定即可从头开始。",
        success: function(res) {
          if (res.confirm) {
            console.log(app.globalData.userInfo.nickName + "我不服按钮 点击确定。")
            wx.redirectTo({
              url: "../handsome/handsome"
            })
          }else {
            console.log(app.globalData.userInfo.nickName + "我不服按钮 点击取消。")
          }

        }
      })
    }


  }


})
