// pages/sample/index/index.js
Page({
  data: {
    grids: [{
        name: '客户',
        path: "salary",
        icon: "company.png"
      },
      {
        name: '订单',
        path: "salary",
        icon: "orders.png"
      },
      {
        name: '公海',
        path: "salary",
        icon: "sea.png"
      },
      {
        name: '联系人',
        path: "salary",
        icon: "person.png"
      },
      {
        name: 'KPI',
        path: "salary",
        icon: "analyze.png"
      }
    ],
    // 一句话
    beautifulline: {
      hitokoto: "志不立，天下无可成之事。",
      from: "王阳明"
    }
  },
  onLoad: function (options) {

    var self = this;
    wx.request({
      url: 'https://v1.hitokoto.cn/',
      success(e) {
        self.setData({
          beautifulline: {
            hitokoto: e.data.hitokoto,
            from: e.data.from
          }
        })
      }
    })

  },

  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})