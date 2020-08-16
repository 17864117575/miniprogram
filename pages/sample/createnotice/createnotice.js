var util = require("../.././../utils/util");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startTime: "",
    endTime: "",
    isAll: false,
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
    // wx.showLoading({
    //   title: '请稍后~',
    //   mask: true
    // });

    // 请求所有员工的数据
    wx.request({
      url: app.globalData.serverUrl + '/wxLogin/getUserList',
      method: "POST",
      success: (res) => {
        this.setData({
          groupList: res.data
        })
      }
    })

    this.setData({
      startTime: util.getDateByDays(),
      endTime: util.getDateByDays(1)
    })
  },

  onStartTimeChange: function (e) {
    this.setData({
      startTime: e.detail.value
    })
  },

  onEndTimeChange: function (e) {
    this.setData({
      endTime: e.detail.value
    })
  },

  onsubmit: function (e) {
    const {
      title
    } = e.detail.value;
    const {
      startTime
    } = e.detail.value;
    const {
      endTime
    } = e.detail.value;
    const {
      group
    } = e.detail.value;
    const {
      content
    } = e.detail.value;

    if (!title) {
      wx.showToast({
        icon: 'none',
        title: '请输入公告标题~'
      })
      return;
    }

    if (!content) {
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

    if (this.data.startTime == this.data.endTime) {
      wx.showToast({
        icon: 'none',
        title: '开始时间不能与结束时间相同~'
      })
      return;
    }

    let grouplist = e.detail.value.group;
    grouplist.splice(grouplist.indexOf("-1"), 1);
    let str = "";
    grouplist.forEach((v, i) => {
      if (i == 0) {
        str += v
      } else {
        str += "," + v
      }
    })

    var url = util.formatUrl('announcement/addAnnouncement', {
      title: title,
      content: content,
      createUserId: "",
      startTime: startTime,
      endTime: endTime,
      readUserIds: str
    })

    wx.showLoading({
      title: '请稍后~',
      mask: true
    })
    wx.request({
      url: url,
      method: "POST",
      success: (res) => {
        wx.hideLoading();
        wx.showToast({
          title: '提交成功~',
          mask: true,
          duration: 2000
        })
        setTimeout((x) => {
          wx.navigateBack({
            delta: 1,
          })
        }, 2000);
      }
    })
  },

  onUnload: function () {
    let pages = getCurrentPages();
    let beforePage = pages[pages.length - 2];
    wx.switchTab({
      url: '/' + beforePage.route,
      success: function () {
        if (beforePage.route == '../notice/notice') {
          beforePage.syncPageData()
        }
      }
    })
  },

  onCheckgroupClick: function (e) {
    console.log(e)
    let {
      value
    } = e.detail;

    let check1 = value[value.length - 1] == "-1"; //选中全部
    let check2 = (value.length == this.data.groupList.length) && !value.includes("-1"); //取消选中全部

    if (check1 || check2) {
      this.data.groupList.forEach((v, i) => {
        v.checked = !this.data.isAll;
      })

      this.setData({
        groupList: this.data.groupList,
        isAll: !this.data.isAll
      });
    } else {
      this.setData({
        isAll: false
      })
    }
  }
})