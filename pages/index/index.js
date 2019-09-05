//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/banner-01.png',
      '../../images/banner-02.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    gridData: [
      { name: "美食", imgSrc: "../../images/grid-01.png" },
      { name: "洗浴足疗", imgSrc: "../../images/grid-02.png" },
      { name: "结婚啦", imgSrc: "../../images/grid-03.png" },
      { name: "KTV", imgSrc: "../../images/grid-04.png" },
      { name: "找工作", imgSrc: "../../images/grid-05.png" },
      { name: "辅导班", imgSrc: "../../images/grid-06.png" },
      { name: "汽车保养", imgSrc: "../../images/grid-07.png" },
      { name: "租房", imgSrc: "../../images/grid-08.png" },
      { name: "装修", imgSrc: "../../images/grid-09.png"}
    ]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function(options) {
    wx.request({
      url: 'https://www.baidu.com',
      success: function(res) {
          console.log(res)
      }
    })
  }
})
