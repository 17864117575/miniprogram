Page({
  data: {
    contactList: [{
      "name": "Crab",
      "phone": "15566667777",
      "time": "2017-10-14",
      "gender": "1",
      "company": "上汽公司"
    }, {
      "name": "Emily",
      "phone": "15566668888",
      "time": "2017-10-13",
      "gender": "2",
      "company": "广州珍妮医学化妆股份公司"
    }, {
      "name": "Rachel",
      "phone": "15566669999",
      "time": "2017-10-10",
      "gender": "1",
      "company": "上汽公司"
    }, {
      "name": "Crab2",
      "phone": "15566667777",
      "time": "2017-10-14",
      "gender": "2",
      "company": "上汽公司"
    }, {
      "name": "Emily2",
      "phone": "15566668888",
      "time": "2017-10-13",
      "gender": "1",
      "company": "上汽公司"
    }, {
      "name": "Rachel2",
      "phone": "15566669999",
      "time": "2017-10-10",
      "gender": "2",
      "company": "上汽公司"
    }, {
      "name": "Emily2",
      "phone": "15566668888",
      "time": "2017-10-13",
      "gender": "1",
      "company": "上汽公司"
    }, {
      "name": "Rachel2",
      "phone": "15566669999",
      "time": "2017-10-10",
      "gender": "2",
      "company": "上汽公司"
    }, {
      "name": "Emily2",
      "phone": "15566668888",
      "time": "2017-10-13",
      "gender": "1",
      "company": "上汽公司"
    }, {
      "name": "Rachel2",
      "phone": "15566669999",
      "time": "2017-10-10",
      "gender": "2",
      "company": "上汽公司"
    }, {
      "name": "Emily2",
      "phone": "15566668888",
      "time": "2017-10-13",
      "gender": "1",
      "company": "上汽公司"
    }, {
      "name": "Rachel2",
      "phone": "15566669999",
      "time": "2017-10-10",
      "gender": "2",
      "company": "上汽公司"
    }, {
      "name": "Crab3",
      "phone": "15566667777",
      "time": "2017-10-14",
      "gender": "1",
      "company": "上汽公司"
    }, {
      "name": "Emily3",
      "phone": "15566668888",
      "time": "2017-10-13",
      "gender": "1",
      "company": "上汽公司"
    }, {
      "name": "Crab3",
      "phone": "15566667777",
      "time": "2017-10-14",
      "gender": "1",
      "company": "上汽公司"
    }, {
      "name": "Emily3",
      "phone": "15566668888",
      "time": "2017-10-13",
      "gender": "1",
      "company": "上汽公司"
    }, {
      "name": "Rachel3",
      "phone": "15566669999",
      "time": "2017-10-10",
      "gender": "1",
      "company": "上汽公司"
    }, {
      "name": "Rachel3",
      "phone": "15566669999",
      "time": "2017-10-10",
      "gender": "1",
      "company": "上汽公司"
    }]
  },

  onMakingCall: function (e) {
    let {
      phonenumber
    } = e.currentTarget.dataset;
    wx.makePhoneCall({
      phoneNumber: phonenumber
    })
  }
})