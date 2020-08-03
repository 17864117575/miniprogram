var cfg = require('../../common/config');
Page({
  data: {
    checkList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.stopPullDownRefresh({
      success: (res) => {},
    })

    wx.showLoading({
      mask: true,
      title: '请稍后~'
    })
    // wx.request({
    //   url: 'url',
    //   success() {
    wx.hideLoading()
    //   }
    // })
    let checkList = [{
      checkId: "1000001",
      person: "管理员",
      date: "2020-03-19 10:14",
      stats: 0,
      content: "试验申请",
      link: "" //关联客户
    }, {
      checkId: "1000002",
      person: "管理员",
      date: "2020-03-19 10:14",
      stats: 1,
      content: "试验申请",
      link: "" //关联客户
    }, {
      checkId: "1000003",
      person: "管理员",
      date: "2020-03-19 10:14",
      stats: 2,
      content: "试验申请",
      link: "" //关联客户
    }, {
      checkId: "1000004",
      person: "管理员",
      date: "2020-03-19 10:14",
      stats: 3,
      content: "试验申请",
      link: "" //关联客户
    }, {
      checkId: "1000005",
      person: "管理员",
      date: "2020-03-19 10:14",
      stats: 4,
      content: "试验申请",
      link: "" //关联客户
    }, {
      checkId: "1000006",
      person: "管理员",
      date: "2020-03-19 10:14",
      stats: 4,
      content: "试验申请",
      link: "客户-济南A公司" //关联客户
    }];
    checkList.forEach((x) => {
      let data = cfg.getDataByStatus(x.stats);
      x.stats = data.name;
      x.color = data.color;
    })

    this.setData({
      checkList
    })
  },

  onPullDownRefresh: function () {
    wx.showLoading({
      title: '请稍后~',
      mask: true
    })
    setTimeout(() => {
      this.onLoad();
    }, 2000);
  },

  onMoreClick: function (e) {
    let {
      data
    } = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../detail/detail?data=' + JSON.stringify(data),
    })
  },

  onAddCheckClick: function (e) {
    wx.navigateTo({
      url: '../create/create',
    })
  }
})