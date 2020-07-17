// pages/user/user.js
const AV = require('../../utils/av-weapp-min');
const {
  User
} = require('../../utils/av-weapp-min');

Page({
  data: {
    title: '更改个人信息',
    avatarUrl: null,
    nickname: "姬小仙",
    employee: '',
    username: '12345678',
    password: '12345678',
    gender: 1,
    email: "123456@163.com"
  },
  onLoad: function (options) {
    console.log(User.current())
    this.setData({
      user: User.current(),
    });
  },

  updateAvatar: function () {
    var self = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        self.setData({
          avatarUrl: tempFilePaths[0]
        })
      }
    })
  },

  updatePassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  updateNickName: function (e) {

  },

  updateGender: function (e) {
    this.setData({
      gender: e.detail.gender
    })
  },

  updateEmail: function (e) {

  },

  save: function () {
    wx.showLoading({
      title: '绑定中~',
    })

    var usr = this.data.employee;
    var psw = this.data.password;
    AV.User.logIn(usr, psw).then(user => {
      // 将当前的微信用户与当前登录用户关联    
      user.linkWithWeapp().then(wx.hideLoading());
      wx.navigateBack({
        delta: 1
      })
    }, () => {
      wx.hideLoading();
      wx.showModal({
        title: '绑定失败',
        content: '请检查输入的检查用户名和密码。',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }).catch(console.error);
  }
})