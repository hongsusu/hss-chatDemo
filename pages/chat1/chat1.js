// pages/chat1/chat1.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://oap4p6qba.bkt.clouddn.com/1a5cbdaf64da01f41923692f172c5af5.jpg',
      'http://oap4p6qba.bkt.clouddn.com/12143305_143920185168_2.jpg',
      'http://oap4p6qba.bkt.clouddn.com/ce0da39af14f6a1baa6919f3eee1a207.jpg'
    ],
    text_array: [],
    text_area: "",
    loading: false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let n = [];
    app.wilddog_ref.child('message').on('child_added', (snapshot, prev) => {
      n.unshift(snapshot.val())
      this.setData({
        text_array: n,
        loading: false,
        text_area: "",
      })
    });
  },
  formSubmit: function (e) {
      setTimeout(() => {
        if (this.data.text_area) {
        this.setData({
          loading: true
        })
        // app.wilddog_ref.child('message').push(this.data.text_area);
        var name = app.globalData.userInfo ?app.globalData.userInfo.nickName:'匿名'
        app.wilddog_ref.child('message').push({
          "full_name": name,
          "message": this.data.text_area,
        });
        }
      },50)
   
  },
  textareaVal: function (e) {
    let text = e.detail.value;

    if (text !== "") {
      this.setData({
        text_area: e.detail.value,
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})