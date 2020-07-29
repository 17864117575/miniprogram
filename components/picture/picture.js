// components/picture/picture.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    path: {
      type: String,
      value: ""
    },
    show: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.setData({
        show: false
      })
    },

    onPictureLongClick() {
      var {
        path
      } = this.data;

      wx.showActionSheet({
        itemList: ['保存本地'],
        success(res) {
          if (res.tapIndex == 0) {
            wx.showLoading({
              title: '请稍后~',
              mask: true
            })

            wx.downloadFile({
              url: path,
              success(res) {
                wx.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success(res) {
                    wx.hideLoading();
                    wx.showToast({
                      title: '保存成功~',
                      duration: 2000,
                      mask: true
                    })
                  },
                  fail(e) {
                    console.error('保存失败')
                  }
                })
              }
            })
          }
        },
        fail(res) {
          console.log(res.errMsg)
        }
      })
    }
  }
})