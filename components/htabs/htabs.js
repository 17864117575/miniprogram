//  htabs结构 tabs: [{
//       id: 0,
//       name: "全部客户",
//       active: true
//     }]

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },

  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e) {
      const {
        index
      } = e.currentTarget.dataset;

      let {
        tabs
      } = this.data;
      tabs.forEach((v, i) => {
        i === index ? v.active = true : v.active = false
      })

      this.setData({
        tabs
      })

      // 事件传值
      this.triggerEvent('itemChange', {
        index
      });
    }
  }
})