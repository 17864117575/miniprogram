var app = getApp();
var util = require('../../../utils/util');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    text1: "",
    membertext: "",
    memberInfo: { //人员数据
      showList: [], //显示数组
      remainList: [], // 剩余
      poolList: [] // 池子
    },
    picturesList: []
  },

  onLoad: function (options) {
    let date = new Date();
    this.setData({
      date: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    });

    var list = [{
        memberId: 1001,
        name: '员工A'
      },
      {
        memberId: 1002,
        name: '员工B'
      },
      {
        memberId: 1003,
        name: '员工C'
      },
      {
        memberId: 1004,
        name: '员工D'
      },
      {
        memberId: 1005,
        name: '员工E'
      },
      {
        memberId: 1006,
        name: '员工F'
      },
    ]

    this.setData({
      "memberInfo.remainList": list,
      "memberInfo.poolList": list
    })

    // wx.request({
    //   url: 'url',
    //   success: () => {

    //   },
    //   fail: () => {

    //   }
    // })
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  onChooseMember: function (e) {
    let index = e.detail.value;
    let list = this.data.memberInfo.remainList;
    let param = list.splice(index, 1);
    this.setData({
      "memberInfo.showList": [...this.data.memberInfo.showList, ...param],
      "memberInfo.remainList": list
    })
  },

  // 删除员工
  onDelete: function (e) {
    let {
      data
    } = e.currentTarget.dataset;

    let {
      showList
    } = this.data.memberInfo;
    let idx = showList.findIndex((v) => {
      return data.memberId == v.memberId;
    })

    let param = showList.splice(idx, 1);
    this.setData({
      "memberInfo.showList": showList,
      "memberInfo.remainList": this.sortList([...this.data.memberInfo.remainList, ...param], 'memberId')
    })
  },

  bindPickerChange: function (e) {
    this.setData({
      text1: e.detail.value
    })
  },

  sortList: function (list, param) {
    let newL = list.sort(function (a, b) {
      return a[param] - b[param]
    })
    return newL;
  },

  addPicture: function (e) {
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        this.setData({
          picturesList: [...this.data.picturesList, ...tempFilePaths]
        })
      }
    })
  },

  handleOnDelete: function (e) {
    let {
      path
    } = e.detail;
    let index = this.data.picturesList.findIndex((x) => {
      return path == x
    })
    this.data.picturesList.splice(index, 1);
    this.setData({
      picturesList: this.data.picturesList
    })
  },

  // 提交表单
  formSubmit: function (e) {
    let {
      reason
    } = e.detail.value;
    if (!reason) {
      wx.showToast({
        icon: 'none',
        title: '请填写审批事由~',
      });
      return;
    }

    let url = util.formatUrl("", {
      reason: reason,
      remark: e.detail.value.remark,
      camva: e.detail.value.camva,
      date: e.detail.value.date,
      member: JSON.stringify(this.data.memberInfo.showList)
    });

    // for (let i = 0; i < this.data.picturesList; i++) {
    //   wx.uploadFile({
    //     filePath: this.data.picturesList[i],
    //     name: 'file',
    //     url: 'url',
    //     success: (res) => {
    //       if (i == this.data.picturesList.length - 1) {
    //         wx.showToast({
    //           icon: 'none',
    //           title: '提交成功~',
    //           duration: 2000
    //         })

    //         setTimeout(function () {
    //           wx.navigateBack({
    //             delta: 1
    //           })
    //         }, 2000)
    //       }
    //     }
    //   })
    // }
  },

  onUnload: function () {
    let pages = getCurrentPages();
    let beforePage = pages[pages.length - 2];
    wx.switchTab({
      url: '/' + beforePage.route,
      success: function () {
        if (beforePage.route == '../client/client') {
          beforePage.syncPageData()
        }
      }
    })
  }
  
})