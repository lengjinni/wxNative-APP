// pages/messages/messages.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    allMessage: [
      {
        title: "多年挑水果小窍门，与君共享~",
        content: "这么多年，挑水果的经验总结出来跟大家分享一下：1. 水果有屁股的，屁股凹进去的甜 2. 皮薄的果肉多，皮厚的果肉少，果肉越多核越小 3. 大小适中的最好，不要买什么奇形怪状 4. 闻起来的时候香味和烂味是不同的 5. 捏的时候某一部分是软的就是烂的 6. 苹果和梨大的和重的比较多汁 7. 挑蜜瓜香瓜时可以闻一闻瓜脐 大家还有什么我不知道的挑水果的小窍门，也可以分享给我呀~"
      },
      {
        title: "洗浴足疗岗位职责",
        content: "洗浴足疗岗位职责频道为各位用户提供关于洗浴足疗工作职责及任职要求，此外还介绍了关于洗浴足疗岗位工资及学历分布情况以及更多与洗浴足疗岗位相关的其他信息。"
      },
      {
        title: "26~29岁是受访青年最认可的结婚年龄段",
        content: "如今，年轻人在30岁能实现传统意义上的“三十而立”并不容易。除了职业发展方面的问题，他们中，有的人还在苦苦寻找适合自己的另一半，迟迟不能走入婚姻。不过，在婚恋问题上，不少年轻人不愿意勉强自己去迁就，而是选择听从自己的内心。当下的年轻人是怎么看待婚姻的？上周，中国青年报社社会调查中心联合问卷网，对1764名18~35岁的年轻人进行的一项调查显示，53.1% 的受访青年认为没有婚姻的人生是不完整的。认同婚姻必要性的男性受访青年（59.2%）多于女性受访青年（47.4%）。受访青年认为近年来结婚率下降的主要原因是婚育成本高和生活节奏快。"
      }
    ],
    message: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      message: this.data.allMessage[options.cat]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})