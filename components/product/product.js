// components/product/product.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    show: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.clearList();
      this.setData({
        show: false
      })

      this.triggerEvent('onClose', {
        show: false
      })
    },

    onChoose(e) {
      let {
        list
      } = this.data;

      this.clearList();
      for (let v in e.detail.value) {
        list[e.detail.value[v]].checked = true
      }

      this.setData({
        list
      })
    },

    clearList() {
      this.data.list.forEach((v, i) => {
        v.checked = false
      });
      this.setData({
        list: this.data.list
      })
    },

    onConfirm(e) {
      let selectList = this.data.list.filter((v) => {
        return v.checked == true;
      });
      if (selectList.length) {
        this.triggerEvent('onConfirm', selectList);
        this.onClose();
      } else {
        wx.showToast({
          icon: 'none',
          title: '请选择关联产品~'
        })
      }
    }
  }
})