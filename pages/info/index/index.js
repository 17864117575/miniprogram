var util = require("../../../utils/util");

Page({
  data: {
    grids: [{
        name: '客户',
        path: "../client/client",
        param: util.formatParam({
          sea: 0
        }), //携带参数
        icon: "company.png",
      },
      {
        name: '订单',
        path: "../../orders/orders",
        param: "", //携带参数
        icon: "orders.png"
      },
      {
        name: '公海',
        path: "../client/client",
        param: util.formatParam({
          sea: 1
        }), //携带参数
        icon: "sea.png"
      },
      {
        name: '联系人',
        path: "../../contacts/contacts",
        param: "", //携带参数
        icon: "person.png"
      },
      {
        name: 'KPI',
        path: "../kpi/main/main",
        param: "", //携带参数
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
    wx.showLoading({
      title: '请稍后~',
      mask: true
    })

    var self = this;
    wx.request({
      url: 'https://v1.alapi.cn/api/mingyan?typeid=34',
      success(e) {
        wx.hideLoading();

        self.setData({
          beautifulline: {
            hitokoto: e.data.data.content,
            from: e.data.data.author
          }
        })
      }
    })
  },

  onFuncClick: function (e) {
    const {
      data
    } = e.currentTarget.dataset;

    wx.navigateTo({
      url: data.path + data.param
    })
  }
})