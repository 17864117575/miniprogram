// pages/info/kpi/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: 'timecard',
      name: '员工客户分析',
      open: false,
      pages: [{
          path: "normal",
          title: "客户总量分析"
        },
        {
          path: "history",
          title: "客户跟进次数分析"
        },
        {
          path: "history",
          title: "客户跟进方式分析"
        },
        {
          path: "history",
          title: "公海客户分析"
        }
      ]
    }, {
      id: 'overwork',
      name: '员工业绩分析',
      open: false,
      pages: [{
          path: "create",
          title: "订单数量分析"
        },
        {
          path: "list",
          title: "订单金额分析"
        },
        {
          path: "list",
          title: "回款金额分析"
        }
      ]
    }, {
      id: 'sample',
      name: '产品分析',
      open: false,
      pages: [{
        path: "index",
        title: "产品分类销量分析"
      }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //事件处理函数
  kindToggle: function (e) {
    var id = e.currentTarget.id,
      list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})