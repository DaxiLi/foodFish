// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:{
      comtyMsg:[
        {
          msgId:111,   // msg id
          fromUser:"1", // uid
          toUser:"2",  // uid
          content:"test communty msg", // msg
          postTime:98745621,// timestamp
          faceImgUrl:"/assest/icon/user.png",
          indexImgUrl:"/image/0.jpg"
        }
      ],
      privary:[{
        msgId:111,   // msg id
        fromUser:"1", // uid
        toUser:"2",  // uid
        content:"test privary msg", // msg
        postTime:98745621,// timestamp
        faceImgUrl:"/assest/icon/user.png",
        indexImgUrl:"/image/0.jpg"
      }]
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    msg.comtyMsg.length()
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