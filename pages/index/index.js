// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    witchPage:"chatMsg",
    tabBar: {
      "color": "#707070",
      "selectedColor": "#000000",
      "list": [
        {
          "pageName":"home",
          "pagePath": "/pages/home/home",
          "text": "逛一逛",
          "tabFunc":"tabHome",
          "selected":"xsxs",
          "iconPath":"/assest/icon/eye.png"
        },
        {
          "pageName":"bbs",
          "pagePath": "/pages/bbs/bbs",
          "text": "发现",
          "tabFunc":"tabBBS",
          "iconPath":"/assest/icon/ellipsis.png"
        },
        {
          "pageName":"postPage",
          "pagePath": "/pages/postGoods/postGoods",
          "text": "发布",
          "tabFunc":"tabPostPage",
          "style":"circle",
          "iconPath":"/assest/icon/add.png"
        },
        {
          "pageName":"chatMsg",
          "pagePath": "/pages/chatMsg/chatMsg",
          "text": "消息",
          "tabFunc":"tabMsg",
          "redDot":"3",
          "iconPath":"/assest/icon/comment.png"
        },
        {
          "pageName":"my",
          "pagePath": "/pages/my/my",
          "text": "我的",
          "tabFunc":"tabMy",
          "iconPath":"/assest/icon/user.png"
        }
      ]
    }
  },
  tabMy(e){
    console.log("tab my");
  },
  tabBBS(e){
    
    console.log("tab my");
  },

  tabHome(e){
    console.log("tab my");

  },
  tabMsg(e){
    console.log("tab my");

  },
  tabPostPage(e){
    console.log("tab my");

  },
  // 监听 tabBar 组件 传回的数据
  tabBarListener(e){
      this.setData({witchPage:this.data.tabBar.list[e.detail].pageName});
      console.log("witchPage=" + this.data.tabBar.list[e.detail].pageName);
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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