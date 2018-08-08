const qiniuUploader = require("../../utils/qiniu-wxapp-sdk");
const toKen = require("../../utils/generate_token");

//index.js

//获取应用实例
var app = getApp()
Page({
  data: {
    imageObject: wx.getStorageSync('imageObject')
  },
  //事件处理函数
  onLoad: function () {
 
  },
  didPressChooesImage: function () {
    var that = this;
    // 微信 API 选文件
    wx.chooseImage({
      count: 1,
      success: function (res) {
        var filePath = res.tempFilePaths[0];
        // 交给七牛上传
        qiniuUploader.upload(filePath, (res) => {
          that.setData({
            'imageObject': res
          });
          wx.setStorageSync('imageObject', res)
        }, (error) => {
          console.error('error: ' + JSON.stringify(error));
        }, {
            region: 'ECN', // 华东区
            uptoken: toKen.getUpToken(),
            domain: 'http://oap4p6qba.bkt.clouddn.com',
            shouldUseQiniuFileName: true,
          },
          //null,// 可以使用上述参数，或者使用 null 作为参数占位符
        );
      }
    })
  },

});

