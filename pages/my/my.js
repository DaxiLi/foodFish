import weRequest from '../../utils/weRequest';

const app = getApp();
const config = require("../../config.js");
Page({

      /**
       * 页面的初始数据
       */
      data: {
            userInfo: {},
            hasUserInfo: false,
            canIUse: wx.canIUse('button.open-type.getUserInfo'),
            canIUseGetUserProfile: false,
            canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
            ,
            gridItemFiltList: [{
                        key: "one",
                        num: 0,
                        text: "收藏"
                  },
                  {
                        key: "two",
                        num: 0,
                        text: "历史"
                  },
                  {
                        key: "three",
                        num: 0,
                        text: "关注"
                  },
                  {
                        key: "four",
                        num: 0,
                        text: "粉丝"
                  }
            ],
            avtSet: {
                  shape: "square",
            },
            userData: [
                  app.globalData.userInfo.avatarUrl,
                  app.globalData.userInfo.nickName
            ],
            hasUserInfo: true,
            showShare: false,
            poster: JSON.parse(config.data).share_poster,
            username: '',
            openid: '',
            roomlist: []
      },
      login(e) {
            console.log("start request");
            console.log(weRequest.nickName);
            weRequest.request({
                  url: app.globalData.apiUrl,
                  showLoading: true,
                  data: {
                        id: '123'
                  },
                  success: function (data) {
                        console.log(data);
                        wx.showToast({
                              title: '登录成功',
                        })
                  },
                  fail: function (res) {
                        console.log("werequest fail");
                        console.log(res);
                  }
            });

      },
      getUserProfile(e) {
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
            console.log("user info");
            console.log(app.globalData.userInfo);
      },
      onShow() {
            if (wx.getUserProfile) {
                  this.setData({
                        canIUseGetUserProfile: true
                  })
            }
      },
      onLoad: function (options) {
            if (wx.getUserProfile) {
                  this.setData({
                        canIUseGetUserProfile: true
                  })
            }
      },



})