// detail.js
//var Util = require('util.js');
Page({
  data: {
    title: '话题详情',
    detail: {},
    hidden: false
  },
  fetchDetail: function (id) {
    var that = this;
    wx.request({
      url: 'http://m.hzyaoyi.cn/wx/zixun_xinxi.asp',
      data: { id: id },
      success: function (res) {
        //res.data[0].created = Util.formatTime(Util.transLocalTime(res.data[0].created));
        that.setData({
          detail: res.data[0]
        })
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },
  onLoad: function (options) {
    this.setData({
      hidden: false
    })
    this.fetchDetail(options.id);
  }
})
