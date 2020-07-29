var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var ringChart = null; //环形图
var State = {
  FAIL: 0, //未通过
  PASS: 1, //已通过
  WAIT: 2 //审核中
}
Page({
  data: {
    orderInfo: {
      orderid: 'AZ_202005121618492081370',
      ordername: "张总购买的一批货",
      clientname: "张总集团",
      amount: '6300.00',
      payment: '1100.00',
      date: '2020-05-12',
      state: State.PASS,
      license: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595526055803&di=255354a177961abd8af8fdd476fc77f1&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D422362611%2C2700604841%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854",
      check: [{
        level: 1,
        name: ['1级审核人'],
        timestamp: '2011-11-11 09:36',
        msg: "创建此申请"
      }, {
        level: 2,
        name: ['2级甲审核人', '2级乙审核人'],
        timestamp: '2011-11-12 09:36',
        msg: "通过审核"
      }, {
        level: 3,
        name: ['3级审核人'],
        timestamp: '2011-11-13 09:36',
        msg: "待审核此申请"
      }],
      pictureShow: false
    },
    data_payment: 0, //已支付
    data_remain: 0, //剩余支付
  },

  onLoad: function (options) {
    let {
      amount
    } = this.data.orderInfo;
    let {
      payment
    } = this.data.orderInfo;
    this.setData({
      data_payment: parseFloat(payment).toFixed(2),
      data_remain: (parseFloat(amount) - parseFloat(payment)).toFixed(2)
    })
  },

  onReady: function (e) {
    let amount = parseInt(this.data.orderInfo.amount);
    let payment = parseInt(this.data.orderInfo.payment);
    ringChart = new wxCharts({
      animation: true,
      canvasId: 'ringCanvas',
      type: 'ring',
      extra: {
        ringWidth: 20,
        pie: {
          offsetAngle: -90
        }
      },
      title: {
        name: parseInt((payment / amount) * 100) + '%',
        color: '#999',
        fontSize: 25
      },
      subtitle: {},
      series: [{
        name: '回款金额',
        data: payment,
        color: '#ff6600'
      }, {
        name: '待收金额',
        data: amount - payment,
        color: '#eee'
      }],
      disablePieStroke: false,
      width: 160,
      height: 160,
      dataLabel: false,
      legend: false,
      background: '#fff',
      padding: 0
    })
  },


  // 环形图点击事件
  touchHandler: function (e) {
    console.log(ringChart.getCurrentDataIndex(e));
  },

  // 查看图片
  onSeeClick: function (e) {
    const {
      path
    } = e.currentTarget.dataset;

    this.setData({
      pictureShow: true
    })
  },

  onBackClick: function () {
    wx.navigateBack({
      delta: 1,
    })
  }
})