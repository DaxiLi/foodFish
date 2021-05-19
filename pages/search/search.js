// pages/search/search.js
const netools = require('../../utils/netools');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    size:10,
    error:false,
    reachBottom:false,
    goodsList:[]
  },
  tabGood(e) {
    console.log(e);
    var gid = e.detail.item.gid;
    console.log(gid);
    wx.navigateTo({
      url: '/pages/goodDetail/goodDetail?gid=' + gid,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var key = options.s;
    console.log(options);
    console.log(key);
    if (key == null || key == ""){
      console.log("has no key");
      this.setData({
        error:true
      })
      return;
    }
    wx.setNavigationBarTitle({
      title: "搜索：" + key,
    })
    netools.getGoodsByKey(key, this.data.page, this.data.size)
    .then(res=>{
      if (res.length == 0) {
        if (this.data.page == 1) {
          this.setData({
            goodsIsEmpty: true
          });
          wx.lin.renderWaterFlow([], true);
          return;
        }
        this.setData({
          reachBottom: true
        })
        return;
      } else if (res.length < this.data.size) {
        this.setData({
          reachBottom: true
        })
      }
      this.data.page++;
      console.log("bool ");
      wx.lin.renderWaterFlow(res, false, () => {
        console.log("渲染成功");
      });
    }).catch(res=>{
      console.log(res);

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