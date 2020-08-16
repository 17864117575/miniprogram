var util = require('../../utils/util');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo: "../../image/logo.png",
    pwdState: false, //密码状态
    username: "",
    password: "",
    isSelect: false //是否记住密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.getStorage({
      key: 'userInfo',
      success(e) {
        self.setData({
          username: e ? e.data.username : "",
          password: e ? e.data.password : "",
          isSelect: e ? true : false
        })
      }
    })
  },

  onPwdStateClick: function () {
    this.setData({
      pwdState: !this.data.pwdState
    })
  },

  updatePassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  updateEmpid: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 改变记住密码状态
  onCheckBoxChange: function (e) {
    this.setData({
      isSelect: !this.data.isSelect
    })
  },

  // 登录
  onLoginClick: function (e) {
    // wx.showLoading({
    //   title: '请稍后~',
    // })

    // let url = util.formatUrl("wxLogin/toLogin", {
    //   "username": this.data.username,
    // });

    // var self = this;
    // wx.request({
    //   url: url,
    //   success(res) {
    //     if (res) {
    //           if (!res.data) {
    //             wx.showToast({
    //               title: '未获取到用户信息~',
    //             })
    //             return;
    //           }
    //       app.globalData.userInfo = res.data;

    //       wx.showToast({
    //         title: '登录成功~',
    //         icon: 'success',
    //         duration: '2000',
    //         complete: () => {
    //           setTimeout(function () {
    //             wx.switchTab({
    //               url: '../index/index',
    //             })
    //           }, 2000)
    //         }
    //       })
    //     } else {
    //       wx.showModal({
    //         title: '提示',
    //         content: '用户名不存在~',
    //         showCancel: false
    //       })
    //     }
    //   },
    //   fail(e) {
    //     console.log(e)
    //   },
    //   complete: () => {
    //     wx.hideLoading();
    //   }
    // })

    // todo
    if (this.data.username == "123") {
      wx.switchTab({
        url: '../index/index',
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '用户名或密码有误',
        showCancel: false
      })
    }

    this.setRemeberUserInfo(this.data.isSelect);
  },

  // 设置记住账号密码
  setRemeberUserInfo: function (state = false) {
    wx.setStorageSync('userInfo', state ? {
      "username": this.data.username,
      "password": this.data.password
    } : {})
  }
})