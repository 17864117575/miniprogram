//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    uindex: null,
    UI: [{
        greeting: "欢迎回来!"
      }, // Chinese UI
      {
        greeting: "Welcome back!"
      }, // English UI
      {
        greeting: "お帰りなさい!"
      }
    ],
    list: [{
      id: 'code',
      name: ['公告', 'Time Card', '打刻'],
      open: false,
      path: "../sample/notice/notice",
    }, {
      id: 'overwork',
      name: ['日志', 'Application', "各種申請"],
      open: false,
      path: "../daily/index/index",
    }, {
      id: 'sample',
      name: ['审批', 'Improvement', "申請承認"],
      open: false,
      path: "../check/index/index",
    }]
  },
  //事件处理函数
  kindToggle: function (e) {
    var id = e.currentTarget.id,
      list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onShow: function () {
    // 设置app语言的全局变量  
    var selectedLanguage = app.globalData.settings.language;
    console.log('Current Language:' + selectedLanguage + ' (0: ZH-ch 1: ENG)');
    this.setData({
      uindex: selectedLanguage
    })
  }
})