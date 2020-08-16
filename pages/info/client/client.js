var app = getApp();
Page({
  data: {
    time: 0, //计时
    sea: true,
    tabs: [],
    showList: [],
    clientList: [{
      customerId: 1001,
      name: "济南efd公司",
      dealStatus: true, //是否成交
      telephone: '13805317777',
      level: "普通客户", // 是否是重点客户
     
      industry: '化工', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '',
      principle: '', //负责人
      endOrder: 88, //最后一单至今的天数
      isDeal: true //是否处理
    }, {
      customerId: 1001,
      name: "济南efd公司",
      dealStatus: false, //是否成交
      telephone: '13805317777',
      level: "普通客户", // 是否是重点客户
      industry: '化工', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '',
      principle: '', //负责人
      endOrder: 108, //最后一单至今的天数
      isDeal: true //是否处理
    }, {
      customerId: 1001,
      name: "济南efd公司",
      dealStatus: true, //是否成交
      telephone: '13805317777',
      level: "普通客户", // 是否是重点客户
     
      industry: '化工', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '',
      principle: '', //负责人
      endOrder: 108, //最后一单至今的天数
      isDeal: false //是否处理
    }, {
      customerId: 1001,
      name: "济南efd公司",
      dealStatus: true, //是否成交
      telephone: '13805317777',
      level: "普通客户", // 是否是重点客户
     
      industry: '化工', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '',
      principle: '小刘', //负责人
      endOrder: 89, //最后一单至今的天数
      isDeal: true //是否处理
    }, {
      customerId: 1001,
      name: "济南efd公司",
      dealStatus: true, //是否成交
      telephone: '13805317777',
      importance: true, // 是否是重点客户
     
      industry: '化工', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '',
      principle: '', //负责人
      endOrder: 88, //最后一单至今的天数
      isDeal: false //是否处理
    }, {
      customerId: 1001,
      name: "济南efd公司",
      dealStatus: true, //是否成交
      telephone: '13805317777',
      level: "普通客户", // 是否是重点客户
     
      industry: '化工', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '老王的重要资源',
      principle: '小刘', //负责人
      endOrder: 878, //最后一单至今的天数
      isDeal: true //是否处理
    }, {
      customerId: 1001,
      name: "济南efd公司",
      dealStatus: true, //是否成交
      telephone: '13805317777',
      level: "普通客户", // 是否是重点客户
     
      industry: '化工', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '',
      principle: '小刘', //负责人
      endOrder: 98, //最后一单至今的天数
      isDeal: false //是否处理
    }, {
      customerId: 1001,
      name: "济南efd公司",
      dealStatus: true, //是否成交
      telephone: '13805317777',
      importance: true, // 是否是重点客户
     
      industry: '化工', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '',
      principle: '小刘', //负责人
      endOrder: 80, //最后一单至今的天数
      isDeal: true //是否处理
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    if (options) {
      this.data.sea = parseInt(options.sea) ? true : false;

      let list = this.data.sea ? [{
        id: 0,
        name: "全部客户",
        active: true,
        color: ""
      }, {
        id: 1,
        name: "未处理申请",
        active: false,
        color: "seagreen"
      }] : [{
        id: 0,
        name: "我的客户",
        active: true,
        color: ""
      }, {
        id: 1,
        name: "已成交90天",
        active: false,
        color: "rgb(247, 188, 82)"
      }, {
        id: 2,
        name: "已成交180天",
        active: false,
        color: "orangered"
      }]

      this.setData({
        tabs: list,
        sea: this.data.sea, //是否是公海客户页面
        showList: this.data.clientList
      })

      wx.setNavigationBarTitle({
        title: this.data.sea ? '公海' : '客户'
      })

      // TODO
      // 如果不是公海客户
      // if (!this.data.sea) {
      //   let url = app.gloalData.userInfo.realname == "管理员" ? '/customer/getCustomerListByAdmin' : ('getCustomerListByUser?ownerUserId=' + app.globalData.userInfo.ownerUserId);
      //   wx.request({
      //     url: app.globalData.serverUrl + url,
      //     method: 'POST',
      //     success: (res) => {
      //       res.data //列表区分
      //       this.setData({
      //         clientList: res.data,
      //         showList: this.setClientList(res.data)
      //       })
      //       // customerId
      //       // name
      //       // dealStatus
      //       // level
      //       // industry
      //       // endOrder
      //       // createDate
      //     }
      //   })
      // }
      // // 如果是公海客户
      // else {
      //   wx.request({
      //     url: app.globalData.serverUrl + '/customer/getHighSeasCustomer',
      //     method: 'POST',
      //     success: (res) => {
      //       // customerId
      //       // name
      //       // dealStatus
      //       // level
      //       // industry
      //     }
      //   })
      // }
    }

    // wx.request({
    //   url: app.globalData.serverUrl + '/wxLogin/getUserList',
    //   method: "POST",
    //   success: (res) => {

    //     wx.stopPullDownRefresh({
    //       success: () => {
    //         wx.hideLoading()
    //       }
    //     });
    //   }
    // })

  },

  onShow: function () {
    if (!app.globalData.onlyone && !this.data.sea) {
      wx.showToast({
        icon: 'none',
        title: '长点击可将客户移至公海',
        duration: 2000
      })
      // 是否只显示一次
      app.globalData.onlyone = true;
    }
  },

  handleItemChange: function (e) {
    const {
      index
    } = e.detail;

    let list = [];
    if (this.data.sea) {
      if (index == 0) {
        list = this.data.clientList;
      } else if (index == 1) {
        list = this.data.clientList.filter((v) => {
          return !v.isDeal;
        });
      }
    } else {
      if (index == 0) {
        list = this.data.clientList;
      } else if (index == 1) {
        list = this.setClientList(this.data.clientList, [90, 180]);
      } else if (index == 2) {
        list = this.setClientList(this.data.clientList, [180]);
      }
    }

    this.setData({
      showList: list
    })
  },

  addClientInfo: function () {
    wx.navigateTo({
      url: '../../overwork/createclient/createclient',
    })
  },

  handleTouchStart: function (e) {
    this.startTime = e.timeStamp;
    //console.log(" startTime = " + e.timeStamp);  
  },

  //touch end
  handleTouchEnd: function (e) {
    this.endTime = e.timeStamp;
    //console.log(" endTime = " + e.timeStamp);  
  },

  handleClick: function (e) {
    //console.log("endTime - startTime = " + (this.endTime - this.startTime));  
    const {
      data
    } = e.currentTarget.dataset;
    if (this.endTime - this.startTime < 350) {
      // 这里应该是请求查询信息
      wx.navigateTo({
        url: '../clientInfo/clientInfo?data=' + JSON.stringify(data)
      })
    }
  },

  handleLongPress: function (e) {
    const {
      data
    } = e.currentTarget.dataset;

    var self = this;
    wx.showModal({
      title: '提示',
      content: '您确定要将“' + data.name + '”移至公海吗？',
      cancelColor: "red",
      success(res) {
        if (res.confirm) {
          wx.request({
            url: app.globalData.serverUrl + '/customer/updateHighSeas?customerId=' + data.customerId,
            method: 'POST',
            success: (x) => {
              // 重新加载刷新页面
              self.onLoad();
            }
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },


  onPullDownRefresh: function () {
    console.log("刷新中")
    // wx.showLoading({
    //   title: '请稍后~',
    //   mask: true
    // });

    var self = this;
    setTimeout(() => {
      self.onLoad()
    }, 1500)
  },

  /**
   * 
   * @param {*源数据列表} list 
   * @param {*时间区域} timearea 
   */
  setClientList: function (list, timeday = []) {
    if (timeday.length <= 0)
      return list;

    return list.filter((v) => {
      let condition1 = timeday[0] ? timeday[0] < v.endOrder : true;
      let condition2 = timeday[1] ? timeday[1] >= v.endOrder : true;
      return condition1 && condition2;
    })
  }
})