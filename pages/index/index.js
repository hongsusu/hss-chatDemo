//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../../logs/logs'
    })
  },
  bindViewTap1:function(){
    wx.navigateTo({
      url: '../chat1/chat1'
    })
  },
  bindViewTap2: function () {
    wx.navigateTo({
      url: '../chat2/chat2'
    })
  },
  bindViewTap3:function(){
    wx.navigateTo({
      url: '../wmap/wmap'
    })
  },
  bindViewTap4: function () {
    wx.navigateTo({
      url: '../video/video'
    })
  },
  onLoad: function (s) {
    var that=this;
    wx.getSetting({
      success: function (res) {
         res.authSetting = {
          "scope.userInfo": true,
          "scope.userLocation": true
        }
  
        if (res.authSetting['scope.userInfo']) {  
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      },
      fail: function(res) {
        console.log('失败了', res);
        
    res.authSetting = {
     "scope.userInfo": true,
     "scope.userLocation": true
     }   
      },
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // }  else {
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  bindGetUserInfo: function (e) {
    var that=this;
    //更新数据
    that.setData({
      userInfo: e.detail.userInfo
    })
  },
  onShareAppMessage: function (res) {
    var n = getCurrentPages()[0].route;
    if (res.from === 'button') {
      // 来自页面内转发按钮
    }
    return {
      title: '自定义转发标题',
      path: n
    }
  }
})
