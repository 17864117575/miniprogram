var wxCharts = require('../../../../utils/wxcharts.js'); //引入wxChart文件
var app = getApp();
var lineChart = null;

Page({
  data: {

  },

  torecord() {
    wx.navigateBack({
      delta: 1,
    })
  },

  touchHandler: function (e) {
    lineChart.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });

  },

  onReady: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    lineChart = new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      animation: true,
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      series: [{
        name: '成交量',
        data: [0, 2, 1, 0, 5, 9, 0, 0, 1, 2, 9, 6],
        format: function (val, name) {
          return val;
        }
      }, {
        name: '新增量',
        data: [2, 0, 0, 0, 1, 2, 9, 6, 1, 0, 5, 9],
        format: function (val, name) {
          return val;
        }
      }],
      yAxis: {
        format: function (val) {
          return Math.round(val) + '个';
        },
        title: '',
        min: 0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width: 15
        }
      },
      width: windowWidth,
      height: 200,
    });
  }
})