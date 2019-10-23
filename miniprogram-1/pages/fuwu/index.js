//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: '全部节点',
    fuwu: [],
    hidden: false
  },
  fetchData: function () {
    var that = this;
    that.setData({
      hidden: false
    })

    wx.request({
      url: "http://m.hzyaoyi.cn/wx/fuwu_list.asp",
      success: function (res) {
        console.log(res);
        that.setData({
          fuwu: res.data
        })
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })

  },
  onLoad: function () {
    this.fetchData();
  }
})
