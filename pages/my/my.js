import weRequest from '../../utils/weRequest';

const app = getApp();
const config = require("../../config.js"),
      setting = require('../../utils/setting'),
      netools = require('../../utils/netools');
console.log(setting);
Page({
      /**
       * 页面的初始数据
       */
      data: {
            admin:false,
            sadmin:true,
            myDealGood: {
                  url: getApp().globalData.fileUrl + "9bfc99d13bd79328fd441e5f98babd3d1621181227.jpg",
                  title: "一只小乌龟",
                  content: "这是商品描述,忍痛出一只可爱小乌龟，很好养，非常可爱，还有腹肌哦！"
            },
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
      tabAdminList: function () {
            wx.navigateTo({
                  url: '../adminList/adminList',
            })
      },
      tabmydeal: function () {
            wx.navigateTo({
                  url: '../myDeals/myDeals',
            })
      },
      login(e) {
            // wx.showToast({
            //       title: '登录成功',
            // })
            // return;
            console.log("start request");
            // console.log(weRequest.nickName);
            weRequest.login();
            var uid = wx.getStorageSync('UID');
            console.log(uid);
            weRequest.login();
            // weRequest.request({
            //       url: app.globalData.apiUrl,
            //       showLoading: true,
            //       data: {
            //             id: '123'
            //       },
            //       success: function (data) {
            //             console.log(data);
            //             wx.showToast({
            //                   title: '登录成功',
            //             })
            //       },
            //       fail: function (res) {
            //             console.log("werequest fail");
            //             console.log(res);
            //       }
            // });

      },
      tabCheckGood(e) {
            console.log(e);
            wx.navigateTo({
              url: '/pages/checkDeals/checkDeals'
            })
      },
      tabMyGood(e) {
            console.log(e);
            var gid = e.currentTarget.dataset;
            wx.navigateTo({
              url: '/pages/goodDetail/goodDetail?gid=' + gid
            })
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
            console.log("my onload");
            if (wx.getUserProfile) {
                  this.setData({
                        canIUseGetUserProfile: true
                  })
            }
            var uid = wx.getStorageSync('UID');
            netools.getGoodsByUid(uid, 1, 1)
                  .then(res => {
                        if (res.length != 0) {
                              this.setData({
                                    myDealGood: res[0]
                              })
                        } else {
                              this.setData({
                                    myDealGood: null
                              })
                        }

                  })
            var adm = wx.getStorageSync('ADMIN');
            console.log(adm);
            this.setData({
                  admin:adm
            })
            var sadm = wx.getStorageSync('SADMIN');
            console.log(sadm);
            if (sadm == uid){
                  this.setData({
                    sadmin:true
                    })  
            }
            
      },
})