Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [{
      orderid: 'AZ_202005121618492081370',
      ordername: "张总购买的一批货",
      amount: '0.00',
      payment: '0.00',
      date: '2020-05-12',
      state: 0,
      member: "张三"
    }, {
      orderid: 'AZ_202005121618492081370',
      ordername: "张总购买的一批货",
      amount: '400.00',
      payment: '400.00',
      date: '2020-05-12',
      state: 2,
      member: "张三"
    }, {
      orderid: 'AZ_202005121618492081370',
      ordername: "刘六入账",
      amount: '200.00',
      payment: '20.00',
      date: '2020-05-12',
      state: 1,
      member: "张三"
    }],
  },

  onLoad: function (options) {
    const {
      orderList
    } = this.data;
    if (orderList) {
      let totalMoney = 0;
      orderList.forEach((v, i) => {
        totalMoney += parseInt(v.amount);
      })
      this.setData({
        totalMoney
      })
    }
  },

  onBtnAddOrderClick: function (e) {
    wx.navigateTo({
      url: '../overwork/createorder/createorder',
    })
  },

  // 查看更多
  onMoreClick: function (e) {
    wx.navigateTo({
      url: '../info/payment/payment',
    })
  }
})