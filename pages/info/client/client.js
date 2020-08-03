var app = getApp();
Page({
  data: {
    time: 0, //计时
    sea: true,
    tabs: [],
    showList: [],
    clientList: [{
      id: 1001,
      name: "济南efd公司",
      deal: true, //是否成交
      telephone: '13805317777',
      importance: false, // 是否是重点客户
      belongId: true, //应该是归属的id与自己的id比对，先用bool代替
      type: '美容', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '',
      principle: '', //负责人
      sea: true, //是否是公海客户
    }, {
      id: 1001,
      name: "济南efd公司",
      deal: false, //是否成交
      telephone: '13805317777',
      importance: false, // 是否是重点客户
      belongId: true, //应该是归属的id与自己的id比对，先用bool代替
      type: '美容', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '',
      principle: '', //负责人
      sea: true, //是否是公海客户
    }, {
      id: 1001,
      name: "济南efd公司",
      deal: true, //是否成交
      telephone: '13805317777',
      importance: false, // 是否是重点客户
      belongId: true, //应该是归属的id与自己的id比对，先用bool代替
      type: '美容', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '',
      principle: '', //负责人
      sea: true, //是否是公海客户
    }, {
      id: 1001,
      name: "济南efd公司",
      deal: true, //是否成交
      telephone: '13805317777',
      importance: false, // 是否是重点客户
      belongId: true, //应该是归属的id与自己的id比对，先用bool代替
      type: '美容', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '',
      principle: '小刘', //负责人
      sea: false, //是否是公海客户
    }, {
      id: 1001,
      name: "济南efd公司",
      deal: true, //是否成交
      telephone: '13805317777',
      importance: true, // 是否是重点客户
      belongId: true, //应该是归属的id与自己的id比对，先用bool代替
      type: '美容', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '',
      principle: '', //负责人
      sea: true, //是否是公海客户
    }, {
      id: 1001,
      name: "济南efd公司",
      deal: true, //是否成交
      telephone: '13805317777',
      importance: false, // 是否是重点客户
      belongId: true, //应该是归属的id与自己的id比对，先用bool代替
      type: '美容', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '老王的重要资源',
      principle: '小刘', //负责人
      sea: false, //是否是公海客户
    }, {
      id: 1001,
      name: "济南efd公司",
      deal: true, //是否成交
      telephone: '13805317777',
      importance: false, // 是否是重点客户
      belongId: true, //应该是归属的id与自己的id比对，先用bool代替
      type: '美容', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '',
      principle: '小刘', //负责人
      sea: false, //是否是公海客户
    }, {
      id: 1001,
      name: "济南efd公司",
      deal: true, //是否成交
      telephone: '13805317777',
      importance: true, // 是否是重点客户
      belongId: true, //应该是归属的id与自己的id比对，先用bool代替
      type: '美容', //客户行业
      address: '',
      addressdetail: '',
      origin: '电话',
      remark: '',
      principle: '小刘', //负责人
      sea: false, //是否是公海客户
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
        name: "全部客户",
        active: true,
        color: ""
      }, {
        id: 1,
        name: "我的客户",
        active: false,
        color: ""
      }, {
        id: 2,
        name: "大于90天",
        active: false,
        color: "rgb(247, 188, 82)"
      }, {
        id: 3,
        name: "大于180天",
        active: false,
        color: "orangered"
      }]

      this.setData({
        tabs: list,
        sea: this.data.sea //是否是公海客户页面
      })

      wx.setNavigationBarTitle({
        title: this.data.sea ? '公海' : '客户'
      })

      this.setData({
        showList: this.data.clientList.filter((x) => {
          return x.sea == this.data.sea;
        })
      })
    }

    wx.stopPullDownRefresh({
      success: () => {
        wx.hideLoading()
      }
    });
  },

  onShow: function () {
    if (!app.globalData.onlyone && !this.data.sea) {
      wx.showToast({
        icon: 'none',
        title: '长点击可将客户移至公海',
        duration: 2000
      })
      app.globalData.onlyone = true;
    }
  },

  handleItemChange: function (e) {
    const {
      index
    } = e.detail;
    console.log("页面下标是：" + index);
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
    console.log(data)

    var self = this;
    wx.showModal({
      title: '提示',
      content: '您确定要将“' + data.name + '”移至公海吗？',
      cancelColor: "red",
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },


  onPullDownRefresh: function () {
    console.log("刷新中")
    wx.showLoading({
      title: '请稍后~',
      mask: true
    });

    var self = this;
    setTimeout(() => {
      self.onLoad()
    }, 1500)
  },
})