Page({

  data: {
    dailyList: [{
      id: 1001,
      author: "郎晟 蔡仁德",
      read: true, //已读未读
      nowText: "预约客户",
      nextText: "拜访老先生",
      problem: "",
      date: "2020-03-27 10:05"
    }, {
      id: 1001,
      author: "郎晟 蔡仁德",
      read: true, //已读未读
      nowText: "预约客户",
      nextText: "拜访老先生",
      problem: "",
      date: "2020-03-27 10:05"
    }, {
      id: 1001,
      author: "郎晟 蔡仁德",
      read: true, //已读未读
      nowText: "预约客户预约客户预约客户预约客户预约客户预约客户预约客户预约客户",
      nextText: "拜访老先生拜访老先生拜访老先生拜访老先生拜访老先生拜访老先生拜访老先生拜访老先生",
      problem: "老先生腿脚不好老先生腿脚不好老先生腿脚不好老先生腿脚不好老先生腿脚不好老先生腿脚不好",
      date: "2020-03-27 10:05"
    }, {
      id: 1001,
      author: "郎晟 蔡仁德",
      read: false, //已读未读
      nowText: "预约客户",
      nextText: "拜访老先生",
      problem: "",
      date: "2020-03-27 10:05"
    }]
  },

  onLoad: function (options) {
    wx.stopPullDownRefresh();
    wx.hideLoading();
  },

  onDelete: function (e) {
    let {
      data
    } = e.currentTarget.dataset;

    wx.showModal({
      title: "提示",
      content: "是否要删除该日志",
      cancelColor: 'cancelColor',
      success: () => {
        wx.showLoading({
          title: '请稍后~',
          mask: true
        })

        // wx.request({
        //   url: 'url', ?id=data.id
        //   success: () => {
        wx.hideLoading();
        wx.showToast({
          title: '删除成功',
        })


        //   }
        // })
      }
    })
  },

  onPullDownRefresh: function () {
    wx.showLoading({
      title: '请稍后~',
    })

    setTimeout((x) => {
      this.onLoad();
    }, 2000)
  },

  onBtnAddDailyClick: function () {
    wx.navigateTo({
      url: '../create/create',
    })
  }
})