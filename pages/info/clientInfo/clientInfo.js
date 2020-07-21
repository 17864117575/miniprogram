var PageType = {
  INFO: 0,
  PERSON: 1,
  TASK: 2,
  ORDER: 3
}

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
    personList: [{
      name:'王先生',
      gender:1,
      telephone:12345689,
    }],//联系人列表
    orderList: [], //订单列表
    taskList: [], // 跟进记录
  },

  onLoad: function (options) {
    if (Object.keys(options).length != 0) {
      let clientInfo = JSON.parse(options.data);
      this.setData({
        clientInfo
      })

      wx.setNavigationBarTitle({
        title: clientInfo.name ? clientInfo.name : ''
      })
    }
  },

  // 保留分享功能
  onShareAppMessage: function () {

  },

  // 修改一次发送请求获取对应数据
  handleItemChange: function (e) {
    const {
      index
    } = e.detail;
    this.setData({
      index
    })

    switch (parseInt(index)) {
      case PageType.INFO:
        break;
      case PageType.ORDER:
        break;
      case PageType.TASK:
        break;
      case PageType.ORDER:
        break;
    }
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