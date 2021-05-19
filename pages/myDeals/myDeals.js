// pages/myDeals/myDeals.js
const netools = require('../../utils/netools');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    size: 10,
    changePriceItem: {},
    changePricePop: false,
    dealList: [{
      gid: 104,
      url: getApp().globalData.fileUrl + "9bfc99d13bd79328fd441e5f98babd3d1621181227.jpg",
      title: "一只小乌龟",
      content: "这是商品描述,忍痛出一只可爱小乌龟，很好养，非常可爱，还有腹肌哦！这是商品描述,忍痛出一只可爱小乌龟，很好养，非常可爱，还有腹肌哦！这是商品描述,忍痛出一只可爱小乌龟，很好养，非常可爱，还有腹肌哦！这是商品描述,忍痛出一只可爱小乌龟，很好养，非常可爱，还有腹肌哦！这是商品描述,忍痛出一只可爱小乌龟，很好养，非常可爱，还有腹肌哦！",
      price: 199
    }]
  },
  tabGood(e){
    console.log(e);
    // return;
    var gid = e.currentTarget.dataset.gid
    console.log(gid);
    wx.navigateTo({
      url: '/pages/goodDetail/goodDetail?gid=' + gid,
    })
  },
  editGood(e) {
    wx.showModal({
      title: "确认编辑",
      content: "您要编辑该商品吗？",
      cancelColor: 'cancelColor',
      success(res) {
        if (res.cancel) {
          console.log('用户点击取消');
          return;
        } else {
          console.log('用户点击confirm');
          // edit
          var key = e.currentTarget.dataset.key;
          wx.navigateTo({
            url: '../postDetail/postDetail?gid=' + key.gid,
          })
        }
      }
    })
  },
  delGood(e) {
    const that = this;
    wx.showModal({
      title: "确认删除？",
      content: "删除后将无法恢复",
      cancelColor: 'cancelColor',
      success(res) {
        if (res.cancel) {
          console.log('用户点击取消');
          return;
        } else {
          console.log('用户点击confirm');
          // 删除商品
          var key = e.currentTarget.dataset.key;
          console.log(getApp().globalData.userInfo);

          netools.delGood(key.gid)
            .then(res => {
              that.refreshGoodList();
              wx.showToast({
                title: '成功！'
              })
            }).catch(res => {
              console.log(res);
              wx.showToast({
                icon: "error",
                title: '失败',
              })
            })
        }
      }
    })

  },
  confirmChangePrice(e) {
    console.log(this.data.changePriceItem);
    this.popClose();
  },
  inputPrice(e) {
    console.log(e);
    this.setData({
      "changePriceItem.newPrice": e.detail.value
    })
  },
  popClose(e) {
    this.setData({
      changePricePop: false
    })
  },
  tabDelGood: function (e) {
    console.log(e);
    var key = e.currentTarget.dataset.key;
    this.setData({
      changePricePop: true,
      changePriceItem: key
    });

  },
  refreshGoodList: function (e) {
    netools.getGoodsByUid(wx.getStorageSync('UID'), this.data.page, this.data.size)
      .then(res => {
        this.setData({
          dealList: res
        })
      }).catch(res => {
        console.log(res);
        wx.showToast({
          icon: "error",
          title: '网络错误',
        })
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.refreshGoodList();
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