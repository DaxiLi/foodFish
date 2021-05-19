// pages/goodDetail/goodDetail.js

const { fileUrl } = require('../../utils/setting');
const  tools = require('../../utils/tools'),
netools = require('../../utils/netools');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    error:false,
    pastDifTime:null,
    fileUrl:getApp().globalData.fileUrl,
    good:{
      "userHead": getApp().globalData.fileUrl + "6ccfa2ae9266c81c2e1b9673bd6aa4941621180092.jpg",
      "userName": "小墨迹",
      "gid": 103,
      "price": "999",
      "oldprice": "0",
      "uid": 67,
      "place": "馨宁",
      "posttime": 1621320096,
      "likenum": 0,
      "commentsnum":0,
      "views": 0,
      "title": "test2",
      "content": "test2",
      "url": "2f64a67b3c17de36cf80ebbd15a7f92d1621320096.jpg",
      "slug": 102,
      "urls": [
      "2f64a67b3c17de36cf80ebbd15a7f92d1621320096.jpg",
      "2f64a67b3c17de36cf80ebbd15a7f92d1621320096.jpg",
      "2f64a67b3c17de36cf80ebbd15a7f92d1621320096.jpg"
      ]
      },

  },
  tabImage(e){
    console.log(e);
    var idx = fileUrl +  e.currentTarget.dataset.idx;
    wx.previewImage({
      urls: this.data.good.urls,
      current:idx
    })
  },
  getDifTime(){
    var  t =  tools.getPastTime(1000 * this.data.good.posttime);
    this.setData({
      pastDifTime:t
    })
    return t;
  },
  linkImage(urls=null){
    var reg = /^((http|https):\/\/)/;
    if (urls == null){
      urls = this.data.good.urls;
      for (var i = 0;i < urls.length;i++){
        var url = urls[i];
        if (reg.test(url)){
          continue;
        }
        console.log(url);
        var path = "good.urls[" + i+ "]";
        this.setData({
          [path]:this.data.fileUrl + url
        })
      }
      return;
    }
    for (var i = 0;i < urls.length;i++){
      var url = urls[i];
      if (reg.test(url)){
        continue;
      }
      urls[i] = this.data.fileUrl + url;
    }
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.gid == null || options.gid == ""){
      console.log("has no gid");
      this.setData({
        error:true
      })
      return;
    }
    netools.getGoodsByGid(options.gid)
    .then(res=>{
      res.userHead = getApp().globalData.fileUrl + res.userHead;
      this.setData({
        good:res
      })
      this.linkImage();
    }).catch(res=>{
      console.log(res);
      this.setData({
        error:true
      })
    })
    console.log(tools.getTimeRangeByUnit(this.data.good.posttime,"day"));
    console.log(tools.formatTime(new Date().getTime() - 1621320096000))
    
    console.log(tools.getPastTime(1621320096000))
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
    this.getDifTime();
    this.linkImage();
    console.log("on show");
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