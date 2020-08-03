Page({
  data: {
    check: null,
    checkList: [{
      level: 1,
      name: ['1级审核人'],
      timestamp: '2011-11-11 09:36',
      msg: "创建此申请"
    }, {
      level: 2,
      name: ['2级甲审核人', '2级乙审核人'],
      timestamp: '2011-11-12 09:36',
      msg: "通过审核"
    }, {
      level: 3,
      name: ['3级审核人'],
      timestamp: '2011-11-13 09:36',
      msg: "待审核此申请"
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let check = JSON.parse(options.data);
    this.setData({
      check
    })
  },

  onUndoClick: function () {
    let {
      id
    } = this.data.check;

    var self = this;
    wx.showModal({
      title: '提示',
      content: '确定要撤回审批吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')

          // wx.request({
          //   url: 'url',
          // })

          self.onBackClick();
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  onBackClick: function () {
    wx.navigateBack({
      delta: 1,
    })
  },

  onUnload: function () {
    let pages = getCurrentPages();
    let beforePage = pages[pages.length - 2];
    wx.switchTab({
      url: '/' + beforePage.route,
      success: function () {
        if (beforePage.route == '../index/index') {
          beforePage.syncPageData()
        }
      }
    })
  }
})