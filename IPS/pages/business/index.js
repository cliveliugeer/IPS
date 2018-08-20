const app = getApp()

Page({
  data: {
    flag:''
  },
  onLoad: function (options) {
    this.setData({
      flag:options.flag
    })
  },
  
})