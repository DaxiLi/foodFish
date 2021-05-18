// app.js

const netools =  require('./utils/netools.js');
const setting = require('./utils/setting');
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
   

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.getUserProfile({
      desc: '需要获取宁的头像昵称信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
            console.log(res)
            this.globalData.userInfo = res.userInfo;
            console.log(res);
      }
    });
    console.log(this.globalData.userInfo);
    console.log("app start")
    this.getUserProfile();
  },
  getUserProfile(e) {
    wx.getUserProfile({
          desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
                console.log(res)
                this.globalData.userInfo = res.userInfo;
          }
    })
    console.log("user info");
    console.log(this.globalData.userInfo);
},
  onShow(){
    
    console.log("on show");
    this.globalData.slugList = wx.getStorageSync('slugList')
    this.globalData.placeList = wx.getStorageSync('placeList')
    console.log( this.globalData.slugList);
    if (!this.globalData.slugList){
      netools.getSlugs()
      .then(res =>{
        this.globalData.slugList = res;
        wx.setStorageSync('slugList', res);
        console.log(res)
      }).catch(res =>{
        wx.showToast({
              icon:"error",
              title: '链接服务器失败!',
          })
          console.log(res);
      })
    }
    if (!this.globalData.placeList){
      netools.getPlaces()
      .then(res =>{
        this.globalData.placeList =res;
        wx.setStorageSync('placeList', res)
      }).catch(res =>{
        wx.showToast({
          icon:"error",
          title: '链接服务器失败!',
        })
      console.log(res);
      })
    }
  },
  globalData: {
    device: {},
    userInfo: {},
    slugList:[],
    placeList:[],
    host:"http://127.0.0.1/",
    apiUrl : setting.apiUrl,
    fileUrl : setting.fileUrl
  }
})
