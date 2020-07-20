Page({

  /**
   * 页面的初始数据
   */
  data: {
    clientInfo: null,
    tabs: [{
      id: 0,
      name: "客户信息",
      active: true
    }, {
      id: 1,
      name: "联系人",
      active: false
    }, {
      id: 2,
      name: "跟进记录",
      active: false
    }, {
      id: 3,
      name: "订单信息",
      active: false
    }],
    index: 0, //所选 htab 下标
  },

  onLoad: function (options) {
    if (Object.keys(options).length != 0) {
      let clientInfo = JSON.parse(options.data);
      this.setData({
        clientInfo
      })

      wx.setNavigationBarTitle({
        title: clientInfo.companyName ? clientInfo.companyName : ''
      })
    }
  },

  // 保留分享功能
  onShareAppMessage: function () {

  },

  handleItemChange: function (e) {
    const {
      index
    } = e.detail;
    this.setData({
      index
    })
  },

  onBtnSetClick: function () {
    const {
      clientInfo
    } = this.data;

    wx.navigateTo({
      url: '../../overwork/createclient/createclient?data=' + JSON.stringify(clientInfo),
    })
  }
})