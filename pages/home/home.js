// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    
    topNoticeList: [{
      image: "/pic/top-notice-default.jpg",
      content: "this is a test message",
      title: "this is a title",

    }],
    segmentList: [{
        slug: 101,
        status: "教材书籍"
      },
      {
        status: "键盘硬件",
        slug: 102
      },
      {
        status: "手机",
        slug: 103
      },
      {
        status: "音乐",
        slug: 104
      },
      {
        status: "模型",
        slug: 105
      }, {
        status: "电动车",
        slug: 106
      },
      {
        status: "数码",
        slug: 107
      }, {
        status: "失物招领",
        slug: 108
      }
    ],
    list: [{
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学,买来3年了，伊拉克成色，谢绝讲价，砍价不回，留着传家",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userame: "李大喜",
        userHead: "../../image/1.jpg"

      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/2.jpg"

      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/3.jpg"

      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/0.jpg"
      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/9.jpg"
      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/8.jpg"
      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/5.jpg"
      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/6.jpg"
      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/7.jpg"
      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/4.jpg"
      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/8.jpg"
      },
      {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/3.jpg"

      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/2.jpg"

      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/0.jpg"
      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/9.jpg"
      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/8.jpg"
      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/5.jpg"
      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userName: "李大喜",
        userHead: "../../image/6.jpg"
      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/7.jpg"
      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/4.jpg"
      }, {
        price: "99.99",
        oldPrice: "100",
        indexImage: "",
        goodsId: "123456",
        shortComent: "二手信安数学",
        postDate: "020200000032",
        goodsLocation: "馨宁",
        userugoodsId: "001",
        userName: "李大喜",
        userHead: "../../image/8.jpg"
      }
    ],

  },

  segmentChanged(e){
    console.log("segment changed!");
    console.log(e.detail.activeKey);
    wx.lin.renderWaterFlow(this.data.list, true, () => {
      console.log(this.data.list);
      console.log("渲染成功");
      // wx.lin.flushSticky();
    });
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    wx.lin.renderWaterFlow(this.data.list, false, () => {
      console.log(this.data.list);
      console.log("渲染成功");
      wx.lin.flushSticky();
    });
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
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