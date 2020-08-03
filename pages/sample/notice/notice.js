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
    // wx.request({
    //   url: 'url',
    //   success(e) {

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
    let list = [];
    if (idx == 0) {
      list = this.data.noticeList.filter((x) => {
        return x.state == 1;
      })
    } else {
      list = this.data.noticeList.filter((x) => {
        return x.state == 0;
      })
    }

    this.setData({
      showList: list
    })
  },

  onBtnAddNoticeClick: function (e) {
    wx.navigateTo({
      url: '../../sample/createnotice/createnotice',
    })
  }
})