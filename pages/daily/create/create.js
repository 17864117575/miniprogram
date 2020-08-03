Page({

  data: {
    tablist: [{
      id: 0,
      name: "日报",
      active: true,
      now: "今日工作内容",
      next: "明日工作内容"
    }, {
      id: 0,
      name: "周报",
      active: false,
      now: "本周工作内容",
      next: "下周工作内容"
    }, {
      id: 0,
      name: "月报",
      active: false,
      now: "本月工作内容",
      next: "下月工作内容"
    }],
    memberInfo: { //人员数据
      showList: [], //显示数组
      remainList: [], // 剩余
      poolList: [] // 池子
    },
    picturesList: [],
    index: 0
  },

  onLoad: function (options) {
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
  },

  handleItemChange: function (e) {
    let {
      index
    } = e.detail;
    this.setData({
      index
    })
  },

  addMember: function (e) {
    let index = e.detail.value;
    let list = this.data.memberInfo.remainList;
    let param = list.splice(index, 1);
    this.setData({
      "memberInfo.showList": [...this.data.memberInfo.showList, ...param],
      "memberInfo.remainList": list
    })
  },

  // 删除员工
  deleteMember: function (e) {
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

  sortList: function (list, param) {
    let newL = list.sort(function (a, b) {
      return a[param] - b[param]
    })
    return newL;
  },

  onAddPicture: function () {
    var self = this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        self.setData({
          picturesList: [...self.data.picturesList, ...tempFilePaths]
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

  onSubmit: function (e) {
    let {
      now
    } = e.detail.value;
    let {
      next
    } = e.detail.value;
    let {
      problem
    } = e.detail.value;

    if (!now && !next && !problem) {
      wx.showToast({
        title: '至少填写一项工作内容~',
        icon: "none"
      })
      return;
    }

    wx.request({
      url: 'url',
    })

    for (let i = 0; i < this.data.picturesList.length; i++) {
      const element = this.data.picturesList[i];
      wx.uploadFile({
        filePath: element,
        name: 'file',
        url: 'url',
        success: (x) => {
          if (i == this.data.picturesList.length - 1) {
            wx.showToast({
              title: '提交成功~',
              duration: 2000
            });

            setTimeout((x) => {
              wx.navigateBack({
                delta: 1,
              })
            }, 2000);
          }
        }
      })
    }
  }
})