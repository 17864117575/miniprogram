// pages/sample/notice/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    htabs: [{
      id: 0,
      name: "公示中",
      active: true,
      color: ""
    }, {
      id: 1,
      name: "已结束",
      active: false,
      color: ""
    }],
    noticeList: [{
      title: "网站主地址",
      msg: "www.baidu.com",
      date: "2020-05-09 09:58",
      author: "管理员",
      state: 0
    }, {
      title: "网站主地址",
      msg: "www.baidu.com",
      date: "2020-05-09 09:58",
      author: "管理员",
      state: 0
    }, {
      title: "网站主地址",
      msg: "www.baidu.com",
      date: "2020-05-09 09:58",
      author: "管理员",
      state: 0
    }, {
      title: "网站主地址",
      msg: "www.baidu.com",
      date: "2020-05-09 09:58",
      author: "管理员",
      state: 1
    }, {
      title: "网站主地址",
      msg: "www.baidu.com",
      date: "2020-05-09 09:58",
      author: "管理员",
      state: 1
    }],
    showList: []
  },

  onLoad: function (options) {
    // wx.showLoading({
    //   title: '请稍后~',
    //   mask: true
    // });

    // wx.request({
    //   url: 'url',
    //   success: (res) => {
    //     wx.hideLoading();
    //     this.setData({
    //       noticeList: res.data,
    //       showList: this.setNoticeList(res.data)
    //     })
    //   },
    //   fail(e) {

    //   }
    // })

    this.setData({
      showList: this.data.noticeList.filter((x) => {
        return x.state == 1;
      })
    })
  },

  handleItemChange: function (e) {
    let idx = e.detail.index;
    this.setData({
      showList: this.setNoticeList(this.data.noticeList, idx != 0)
    })
  },

  onBtnAddNoticeClick: function (e) {
    wx.navigateTo({
      url: '../../sample/createnotice/createnotice',
    })
  },

  // 筛选是否过期
  setNoticeList: function (list, over = false) {
    var date = new Date();
    return list.filter((x) => {
      return over ? date.getTime() >= x.endTime : x.endTime > date.getTime();
    })
  }
})