// components/modal/modal.js
Component({
  properties: {
    rangeList: {
      type: Array,
      value: []
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
    show: true,
    rangeList: [],
    index: -1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleDialog() {
      this.setData({
        show: !this.data.show
      })

      this.triggerEvent('closeClick', {
        show: this.data.show
      });
    },

    onPickerChange: function (e) {
      const {
        value
      } = e.detail;

      this.setData({
        index: value
      })
    },

    // 点击确定按钮，小窗一定是都要填写的
    onBtnConfirmClick(e) {
      // console.log(e);
      let {
        value
      } = e.detail;
      let pass = true;

      for (let i in value) {
        if (value[i] == "") {
          pass = false;
          break;
        }
      }

      if (!pass) {
        wx.showToast({
          icon: 'none',
          title: '请填写完整信息~'
        })
        return;
      }

      this.triggerEvent('confirmClick', e.detail.value);
    }
  }
})