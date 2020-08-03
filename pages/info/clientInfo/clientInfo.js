var PageType = {
  INFO: 0,
  PERSON: 1,
  TASK: 2,
  ORDER: 3
}

var State = {
  FAIL: 0, //未通过
  PASS: 1, //已通过
  WAIT: 2 //审核中
}

var util = require('../../../utils/util');
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    index: 0, //所选 htab 下标
    clientInfo: null,
    tabs: [{
      id: 0,
      name: "客户信息",
      active: true
    }, {
      id: 1,
      name: "联系人",
      active: false
    }, {
      id: 2,
      name: "跟进记录",
      active: false
    }, {
      id: 3,
      name: "订单信息",
      active: false
    }],
    personList: [], //联系人列表
    taskList: [{
      belongId: 10001,
      name: "小小小",
      timestamp: "2019-11-11 11:11", //可以后期做成俏皮一点的 昨天 1月前 取时间范围差
      remark: "上午接待客户，中午邀请客户吃饭，晚上夜总会包场",
      type: 0
    }, {
      belongId: 10002,
      name: "中中中",
      timestamp: "2019-11-11 11:11", //可以后期做成俏皮一点的 昨天 1月前 取时间范围差
      remark: "上午接待客户，中午邀请客户吃饭，晚上夜总会包场",
      type: 2
    }, {
      belongId: 10003,
      name: "大大大",
      timestamp: "2019-11-11 11:11", //可以后期做成俏皮一点的 昨天 1月前 取时间范围差
      remark: "上午接待客户，中午邀请客户吃饭，晚上夜总会包场",
      type: 3
    }], //订单列表
    orderList: [{
      orderid: 'AZ_202005121618492081370',
      ordername: "张总购买的一批货",
      amount: '0.00',
      payment: '0.00',
      date: '2020-05-12',
      state: 0
    }, {
      orderid: 'AZ_202005121618492081370',
      ordername: "张总购买的一批货",
      amount: '400.00',
      payment: '400.00',
      date: '2020-05-12',
      state: 2
    }, {
      orderid: 'AZ_202005121618492081370',
      ordername: "刘六入账",
      amount: '200.00',
      payment: '20.00',
      date: '2020-05-12',
      state: 1
    }], // 跟进记录
    totalMoney: 0, //累计订单销售额
    typeList: ["打电话", "发邮件", "发短信", "见面拜访", "活动"],
    memeberList: [{
        id: 0,
        name: "员工A"
      },
      {
        id: 1,
        name: "员工B"
      },
      {
        id: 2,
        name: "员工C"
      },
      {
        id: 3,
        name: "员工D"
      },
      {
        id: 4,
        name: "员工E"
      },
    ]
  },

  onLoad: function (options) {
    if (Object.keys(options).length != 0) {
      let clientInfo = JSON.parse(options.data);
      this.setData({
        clientInfo
      })

      wx.setNavigationBarTitle({
        title: clientInfo.name ? clientInfo.name : ''
      })
    }

    this.setData({
      personList: [{
        name: '王先生',
        gender: 1,
        telephone: 13754435050,
        occuption: "技术总监", //职位
        email: "zhoufeitian@yahoo.com",
        address: "山东省/济南市/历下区",
        param: "关键决策人", //是否是关键决策人
      }, {
        name: '周五',
        gender: 1,
        telephone: 13754435050,
        occuption: "技术总监", //职位
        email: "zhoufeitian@yahoo.com",
        address: "山东省/济南市/历下区",
        param: "", //是否是关键决策人
      }]
    })
  },

  // 保留分享功能
  onShareAppMessage: function () {

  },

  // 修改一次发送请求获取对应数据
  handleItemChange: function (e) {
    const {
      index
    } = e.detail;
    this.setData({
      index
    })

    switch (parseInt(index)) {
      case PageType.INFO:
        break;
      case PageType.PERSON:
        break;
      case PageType.TASK:
        break;
      case PageType.ORDER:
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
        break;
    }
  },

  onSelectChange: function (e) {
    let member = this.data.memeberList[e.detail.value].name;
    var self = this;
    wx.showModal({
      title: '提示',
      content: '确定要将客户分配给' + member + "?",
      cancelColor: 'red',
      success(res) {
        if (res.confirm) {
          self.setData({
            "clientInfo.principle": member
          });

          // wx.showLoading({
          //   title: '请稍后~',
          // });
          // 请求 分配负责人
          // wx.request({
          //   url: 'url',
          //   success(res) {
          //     wx.hideLoading();
          //     console.log(res)
          // wx.showToast({
          //   title: '分配成功~',
          // })
          //   },
          //   fail(e) {
          //   }
          // })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  onBtnApplyClick: function (e) {
    let {
      data
    } = e.currentTarget.dataset;
    wx.showModal({
      title: "提示",
      content: "确定要申请领取" + data.name + "？",
      success: () => {
        // wx.showLoading({
        //   title: '请稍后~',
        // });

        // wx.request({
        //   url: 'url',
        //   success: () => {
        //     wx.hideLoading();
        //     wx.showToast({
        //       title: '申请领取成功~',
        //       mask: true
        //     }, 2000);
        //     setTimeout(() => {
        //       wx.navigateBack({
        //         delta: 1,
        //       })
        //     }, 2000)
        //   }
        // })
      },
      fail: () => {}
    })
  },

  onBtnDeleteClick: function (e) {
    let {
      data
    } = e.currentTarget.dataset;
    wx.showModal({
      title: "提示",
      content: "确定要删除" + data.name + "？",
      cancelColor: "red",
      success: () => {
        // wx.showLoading({
        //   title: '请稍后~',
        // });

        // wx.request({
        //   url: 'url',
        //   success: () => {
        //     wx.hideLoading();
        //     wx.showToast({
        //       title: '删除成功~',
        //       mask: true
        //     }, 2000);
        //     setTimeout(() => {
        //       wx.navigateBack({
        //         delta: 1,
        //       })
        //     }, 2000)
        //   }
        // })
      },
      fail: () => {}
    })
  },

  // 页面卸载时用到 ， 针对删除用户刷新上级页面
  onUnload: function () {
    console.log("页面卸载")

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
  },

  onBtnSetClick: function () {
    const {
      clientInfo
    } = this.data;

    wx.navigateTo({
      url: '../../overwork/createclient/createclient?data=' + JSON.stringify(clientInfo),
    })
  },

  // 新增联系人
  onBtnAddClientClick: function (e) {
    wx.navigateTo({
      url: '../../overwork/createclient/createclient?isclient=true',
    })
  },

  onBtnAddTaskClick: function (e) {
    this.setData({
      show: true
    })
  },

  // 关闭订单弹框
  handleCloseClick(e) {
    let {
      show
    } = e.detail;
    this.setData({
      show
    })
  },

  // 确认提交订单
  handleConfirmClick(e) {
    console.log(e);
    if (!e) return;

    wx.showLoading({
      title: '请稍后~',
      mask: true
    });

    let url = util.formatUrl('orders/abcdefj', {
      remark: e.detail.remark,
      type: e.detail.type
    })
    console.log(url);

    var self = this;
    wx.request({
      url: url,
      method: 'POST',
      success(res) {
        wx.hideLoading({
          success: (res) => {
            wx.showToast({
              title: '提交成功~',
              duration: 1500
            })
            setTimeout(function () {
              self.setData({
                show: false
              })
            }, 1500)
          },
        })
      }
    })
  },

  onTaskDeleteClick: function (e) {
    wx.showModal({
      title: '提示',
      content: '确认要删除该条记录吗',
      cancelColor: '#E64340',
      success(res) {
        if (res.confirm) {
          wx.showLoading({
            title: '请稍后~',
            mask: true
          })
          wx.request({
            url: 'url',
            success(e) {},
            fail(e) {
              console.log(e)
            },
            complete() {
              wx.hideLoading({
                success: (res) => {
                  wx.showToast({
                    title: '删除成功',
                    duration: 2000
                  });
                },
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  // 新增订单
  onBtnAddOrderClick: function (e) {
    wx.navigateTo({
      url: '../../overwork/createorder/createorder',
    })
  },

  onMoreClick: function (e) {
    wx.navigateTo({
      url: '../../info/payment/payment',
    })
  }
})