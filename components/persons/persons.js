// components/persons/persons.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
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
    // 点击联系人 传递data 或者 根据一个id 请求
    onSettingClick(e) {
      const {
        data
      } = e.currentTarget.dataset;

      if (!data) return;

      wx.navigateTo({
        url: '/pages/overwork/createclient/createclient?isclient=true&data=' + JSON.stringify(data),
      })
    }
  }
})