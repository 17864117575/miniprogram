var app = getApp();

Page({
  data: {
    // 客户信息
    clientInfo: {
      name: "",
      gender: 0,
      address: "请选择",
      addressdetail: "",
      telephone: "",
      type: 0,
      importance: false,
      origin: 0, //客户来源
      remark: "" //备注
    },
    originList: [
      "促销活动", "引擎搜索", "广告", "转介绍", "线上注册",
      "预约上门", "陌生拜访", "招商资源", "公司资源", "展会资源",
      "个人资源", "电话咨询", "邮件咨询"
    ],
    typeList: [
      "膏霜", "面膜", "精华", "洗涤", "专业线", "乳液", "其他"
    ],
  },

  onLoad: function (options) {
    if (Object.keys(options).length == 0)
      return;

    const clientInfo = JSON.parse(options.data);
    if (!clientInfo) return;
    this.setData({
      clientInfo
    })

    // 到了这一步一定是编辑信息
    wx.setNavigationBarTitle({
      title: '编辑客户',
    })

    wx.showLoading({
      title: '请稍后~',
    })

    wx.hideLoading();
  },

  onGenderChange: function (e) {
    this.setData({
      "clientInfo.gender": e.detail.value
    })
  },

  onTypeChange: function (e) {
    this.setData({
      "clientInfo.type": e.detail.value
    })
  },

  onOriginChange: function (e) {
    this.setData({
      "clientInfo.origin": e.detail.value
    })
  },

  onImportanceChange: function (e) {
    this.setData({
      "clientInfo.importance": e.detail.value
    })
  },

  // 确定的地址
  onAddressChange: function (e) {
    let {
      value
    } = e.detail;
    this.setData({
      "clientInfo.address": value.join('/')
    })
  },

  // 省份发生变化
  onProvinceChange: function (e) {
    console.log(e);
  },

  // 删除联系人，clientId是客户id
  onBtnDeleteClick: function (clientId) {

  },

  formSubmit: function (e) {
    console.log(e);
  }
})