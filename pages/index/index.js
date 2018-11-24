//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  
  },
  
  onLoad: function () {
    var that =this;
    wx.request({
      url: 'https://www.sojson.com/api/qqmusic/8446666',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          haha: res.data.data.playlist[1].xsong_url
        })
        console.log(res.data)
        console.log(res.data.data.playlist[1].xsong_url)
      },
      fail(res){
        console.log(res.data)
      }
    })
  },
 
})
