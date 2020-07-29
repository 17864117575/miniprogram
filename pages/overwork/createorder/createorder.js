var util = require('../../../utils/util');
var app = getApp();

Page({
  data: {
    clientList: [],
    orderId: "", //随机产生的订单号
    pickerIndex: -1,
    orderDate: "",
    orderImgPath: "", //选择的凭证照片
    productList: [], //所选的产品id
    showList: [{
      id: 1,
      name: "TP.Group star",
      price: "0",
      unit: "kg",
      type: "0", //默认
      state: true
    }, {
      id: 2,
      name: "TP.Group star",
      price: "0",
      unit: "kg",
      type: "0", //默认
      state: true
    }, {
      id: 3,
      name: "TP.Group star",
      price: "0",
      unit: "kg",
      type: "0", //默认
      state: true
    }, {
      id: 4,
      name: "TP.Group star",
      price: "0",
      unit: "kg",
      type: "0", //默认
      state: true
    }],
    show: false //显示添加物品栏
  },

  onLoad: function (options) {
    var currentDate = new Date();
    this.setData({
      orderDate: currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate()
    })

    // wx.request({
    //   url: 'url',
    // })  //请求获取客户模块

    this.setData({
      clientList: ["A公司", "B公司", "C公司"]
    })

    // wx.request({
    //   url: 'url',
    // })  //请求获取客户模块
    this.setData({
      orderId: "AZ_202007271110523072780"
    })
  },

  onClientChange: function (e) {
    this.setData({
      pickerIndex: e.detail.value
    })
  },

  onDateChange: function (e) {
    this.setData({
      orderDate: e.detail.value
    })
  },

  onChooseImg: function (e) {
    var self = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        self.setData({
          orderImgPath: tempFilePaths[0]
        });
      }
    })
  },

  // 选择产品
  onChooseProduction: function (e) {
    let {
      showList
    } = this.data;

    this.data.showList.forEach((v, i) => {
      v.checked = false;
    });

    if (this.data.productList.length > 0) {
      this.data.productList.forEach((v, i) => {
        for (let i = 0; i < this.data.showList.length; i++) {
          const e = this.data.showList[i];
          if (e.id == v.id) {
            this.data.showList[i].checked = true;
          }
        }
      })
    }

    // showList.forEach((v, i) => {
    //   if (this.data.productList[i]) {
    //     v.checked = v.id == this.data.productList[i].id;


    //   } else {
    //     v.checked = false;
    //   }
    // })

    this.setData({
      showList,
      show: true
    })
  },

  handleOnClose: function (e) {
    this.setData({
      show: false
    })
  },

  handleOnConfirm: function (e) {
    var list = e.detail;
    list.forEach((v, i) => {
      v.count = 1;
      v.discount = 0;
      v.total = v.price * v.discount * (v.count / 100);
    })
    this.setData({
      productList: list
    })
  },

  onNumberPriceInput: function (e) {
    const {
      idx
    } = e.currentTarget.dataset;

    this.data.productList[idx].price = e.detail.value;
    let total = this.data.productList[idx].price * this.data.productList[idx].discount * (this.data.productList[idx].count / 100);
    this.data.productList[idx].total = parseFloat(total).toFixed(1);
    this.setData({
      productList: this.data.productList
    })
  },

  onNumberCountInput: function (e) {
    const {
      idx
    } = e.currentTarget.dataset;

    this.data.productList[idx].count = e.detail.value;
    let total = this.data.productList[idx].price * this.data.productList[idx].discount * (this.data.productList[idx].count / 100);
    this.data.productList[idx].total = parseFloat(total).toFixed(1);
    this.setData({
      productList: this.data.productList
    })
  },

  onNumberDiscountnput: function (e) {
    const {
      idx
    } = e.currentTarget.dataset;

    this.data.productList[idx].discount = e.detail.value;
    let total = this.data.productList[idx].price * this.data.productList[idx].discount * (this.data.productList[idx].count / 100);
    this.data.productList[idx].total = parseFloat(total).toFixed(1);
    this.setData({
      productList: this.data.productList
    })
  },

  onDeleteItem: function (e) {
    const {
      idx
    } = e.currentTarget.dataset;
    this.data.productList.splice(idx, 1);
    this.setData({
      productList: this.data.productList
    })
  },

  onOrderSubmit: function (e) {
    const {
      orderId
    } = e.detail.value;
    const {
      client
    } = e.detail.value;
    const {
      ordername
    } = e.detail.value;
    const {
      orderImgPath
    } = this.data;
    console.log(e.detail.value)
    if (orderId == "") {
      wx.showToast({
        icon: 'none',
        title: '请填写订单编号~'
      })
      return;
    }

    if (client == "") {
      wx.showToast({
        icon: 'none',
        title: '请选择客户~'
      })
      return;
    }

    if (ordername == "") {
      wx.showToast({
        icon: 'none',
        title: '请填写订单名称~'
      })
      return;
    }

    if (orderImgPath == "") {
      wx.showToast({
        icon: 'none',
        title: '请选择出贷凭证~'
      })
      return;
    }

    let {
      amount
    } = e.detail.value;
    let url = util.formatUrl("1231312", {
      orderId: orderId,
      client: client,
      ordername: ordername,
      amount: amount,
      date: this.data.orderDate,
      remark: e.detail.value.remark,
      productList: JSON.stringify(this.data.productList)
    });
    console.log(url);

    // wx.request({
    //   url: 'url',
    //   method: 'POST',
    //   success() {

    //   }
    // })

    wx.uploadFile({
      filePath: this.data.orderImgPath,
      name: 'file',
      url: app.globalData.serverUrl,
      success(e) {
        wx.showToast({
          title: '提交成功~'
        })
      },
      fail() {
        wx.showToast({
          icon: 'none',
          title: '提交失败~'
        })
      }
    })
  }
})