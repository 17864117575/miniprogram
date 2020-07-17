Page({

  /**
   * 页面的初始数据
   */
  data: {
    clientList: [{
      companyName: "济南efd公司",
      telephone: '13805317777',
      importance: false, // 是否是重点客户
      belongId: true, //应该是归属的id与自己的id比对，先用bool代替
      industry: '美容', //客户行业
    }, {
      companyName: "广州玉器公司",
      telephone: '13805317777',
      importance: true,
      belongId: false,
      industry: '制造业',
    }, {
      companyName: "济南efd公司",
      telephone: '13805317777',
      importance: false,
      belongId: true,
      industry: '电子商务',
    }, {
      companyName: "济南efd公司",
      telephone: '13805317777',
      importance: true,
      belongId: false,
      industry: '美容',
    }, {
      companyName: "济南efd公司",
      telephone: '13805317777',
      importance: true,
      belongId: true,
      industry: '美容',
    }, {
      companyName: "济南efd公司",
      telephone: '13805317777',
      importance: false,
      belongId: true,
      industry: '美容',
    }, {
      companyName: "济南efd公司",
      telephone: '13805317777',
      importance: true,
      belongId: true,
      industry: '美容',
    }, {
      companyName: "济南efd公司",
      telephone: '13805317777',
      importance: true,
      belongId: true,
      industry: '美容',
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  addClientInfo: function () {
    // wx.navigateTo({
    //   url: 'url',
    // })
  }
})