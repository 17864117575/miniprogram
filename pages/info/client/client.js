Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
      id: 0,
      name: "全部客户",
      active: true
    }, {
      id: 1,
      name: "我的客户",
      active: false
    }, {
      id: 2,
      name: "大于90天",
      active: false
    }, {
      id: 3,
      name: "大于180天",
      active: false
    }],
    clientList: [{
      companyName: "济南efd公司",
      telephone: '13805317777',
      importance: false, // 是否是重点客户
      belongId: true, //应该是归属的id与自己的id比对，先用bool代替
      industry: '美容', //客户行业
    }, {
      companyName: "广州玉器公司",
      telephone: '13805317777',
      importance: true,
      belongId: false,
      industry: '制造业',
    }, {
      companyName: "济南efd公司",
      telephone: '13805317777',
      importance: false,
      belongId: true,
      industry: '电子商务',
    }, {
      companyName: "济南efd公司",
      telephone: '13805317777',
      importance: true,
      belongId: false,
      industry: '美容',
    }, {
      companyName: "济南efd公司",
      telephone: '13805317777',
      importance: true,
      belongId: true,
      industry: '美容',
    }, {
      companyName: "济南efd公司",
      telephone: '13805317777',
      importance: false,
      belongId: true,
      industry: '美容',
    }, {
      companyName: "济南efd公司",
      telephone: '13805317777',
      importance: true,
      belongId: true,
      industry: '美容',
    }, {
      companyName: "济南efd公司",
      telephone: '13805317777',
      importance: true,
      belongId: true,
      industry: '美容',
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.stopPullDownRefresh({
      success: () => {
        wx.hideLoading()
      }
    });
  },

  handleItemChange: function (e) {
    const {
      index
    } = e.detail;
    console.log("页面下标是：" + index);
  },

  addClientInfo: function () {
    wx.navigateTo({
      url: '../../overwork/createclient/createclient',
    })
  },

  onClientItemClick: function (e) {
    const {
      data
    } = e.currentTarget.dataset;

    // 这里应该是请求查询信息
    wx.navigateTo({
      url: '../clientInfo/clientInfo?data=' + JSON.stringify(data)
    })
  },

  onPullDownRefresh: function () {
    console.log("刷新中")
    wx.showLoading({
      title: '请稍后~',
      mask: true
    });

    var self = this;
    setTimeout(() => {
      self.onLoad()
    }, 1500)
  },
})