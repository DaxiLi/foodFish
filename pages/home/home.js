// index.js
// 获取应用实例
const app = getApp()
const netools = require('../../utils/netools')

Page({
  data: {
    segmentList: app.globalData.slugList,
    reachBottom:false,
    list: [],
    page: 1,
    size: 10,
    segment: null,
    goodsIsEmpty: false,
    topNoticeList: [{
      image: "/pic/top-notice-default.jpg",
      content: "this is a test message",
      title: "this is a title",
    }],


  },

  segmentChanged(e) {
    this.data.page = 1;
    this.data.segment = e.detail.activeKey;
    this.setData({
      reachBottom:false,
      goodsIsEmpty:false
    })
    console.info("segment changed!")
    this.refreshGoodsList(true);

  },
  refreshGoodsList(clear){
    console.log("以：" + this.data.segment + ";" + this.data.page + ";" + this.data.size + "发起请求");
    netools.getGoodsBySlug(this.data.segment, this.data.page, this.data.size)
    .then(res => {
      if (res.length == 0) {
        if (this.data.page == 1){
          this.setData({
          goodsIsEmpty: true
          });
          wx.lin.renderWaterFlow([],true);
          return;
        }
        this.setData({
          reachBottom:true
        })
        return;
      }else if (res.length < this.data.size){
        this.setData({
          reachBottom:true
        })
      }
      this.data.page++;
      console.log("bool ");
      console.log(clear);
      wx.lin.renderWaterFlow(res, clear, () => {
        console.log("渲染成功");
      });
    }).catch(res => {
      wx.showToast({
        icon:"error",
        title: '加载失败',
      })
      console.log(res);
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    this.data.page = 1;
    this.data.segment = app.globalData.slugList[0];
    console.log("home onshow");
    wx.lin.renderWaterFlow(this.data.list, false, () => {
      console.log("渲染成功");
    });
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    };
    this.data.slugList = wx.getStorageSync('slugList')
    this.data.placeList = wx.getStorageSync('placeList')
    if (this.data.segmentList.length < 1) {
      return;
    }
    console.log(app.globalData.slugList[0].slug);
    this.data.segment = app.globalData.slugList[0].slug;
    this.refreshGoodsList(true);
  },
  onShow() {


  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("home pulldown");
    wx.hideNavigationBarLoading();
    this.data.page = 1;
    this.setData({
      reachBottom:false,
      goodsIsEmpty:false
    })
    this.refreshGoodsList(true);
    wx.stopPullDownRefresh() ;
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("到底了");
    console.log("以：" + this.data.segment + ";" + this.data.page + ";" + this.data.size + "发起请求");
    this.refreshGoodsList(false);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})