//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: '全部节点',
    nodes: [],
    hidden: false
  },
  fetchData: function () {
    var that = this;
    that.setData({
      hidden: false
    })

    wx.request({
      url: "http://m.hzyaoyi.cn/wx/zixun_list.asp",
      success: function (res) {
        console.log(res);
        that.setData({
          nodes: res.data
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
