//app.js
var wilddog = require('./utils/wilddog-wxapp-all');
App({
  onLaunch: function (options) {
    // 展示本地存储能力

    //野狗SDK
    var config = {
      syncURL: 'https://wd8334259556zosnwu.wilddogio.com',
      authDomain: "wd8334259556zosnwu.wilddog.com"
    }
    var otherApp=wilddog.initializeApp(config);
    this.wilddog_ref = wilddog.sync().ref();

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     wx.getUserInfo({
    //       success: res => {
    //         // 可以将 res 发送给后台解码出 unionId
    //         this.globalData.userInfo = res.userInfo
    //       }
    //     })
    //   }
    // })
  
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function (res) {
          wx.getUserInfo({
            withCredentials: false,
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
       })
    }
  },
  globalData: {
    userInfo: null
  },
  // 没用
  addItem: function (text) {
    this.ref.push(text);
  },
  // 没用
  getRef: function () {
    return this.wilddog_ref;
  }
})