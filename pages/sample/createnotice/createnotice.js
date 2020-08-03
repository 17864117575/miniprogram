var util = require("../.././../utils/util");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starttime: "",
    endtime: "",
    groupList: [{
      id: 0,
      name: "人力资源部"
    }, {
      id: 1,
      name: "董事会"
    }, {
      id: 2,
      name: "技术部"
    }, {
      id: 3,
      name: "审核部"
    }, {
      id: 4,
      name: "美术部"
    }, {
      id: 5,
      name: "研发部"
    }, {
      id: 6,
      name: "保安部"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      starttime: util.getDateByDays(),
      endtime: util.getDateByDays(1)
    })
  },

  onStartTimeChange: function (e) {
    this.setData({
      starttime: e.detail.value
    })
  },

  onEndTimeChange: function (e) {
    this.setData({
      endtime: e.detail.value
    })
  },

  onsubmit: function (e) {
    const {
      title
    } = e.detail.value;
    const {
      starttime
    } = e.detail.value;
    const {
      endtime
    } = e.detail.value;
    const {
      group
    } = e.detail.value;
    const {
      message
    } = e.detail.value;

    if (!title) {
      wx.showToast({
        icon: 'none',
        title: '请输入公告标题~'
      })
      return;
    }

    if (!message) {
      wx.showToast({
        icon: 'none',
        title: '请输入公告正文~'
      })
      return;
    }

    if (!title) {
      wx.showToast({
        icon: 'none',
        title: '请输入公告标题~'
      })
      return;
    }

    if (this.data.starttime == this.data.endtime) {
      wx.showToast({
        icon: 'none',
        title: '开始时间不能与结束时间相同~'
      })
      return;
    }
  }
})