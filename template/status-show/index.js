Component({
  externalClasses: ["l-class", "l-image-class", "l-button-class", "l-describe-class"],
  properties: {
    show: Boolean,
    type: {
      type: String,
      value: "success",
      observer: "_changeStatus"
    },
    describe: String,
    buttonText: String,
    bgColor: {
      type: String,
      value: "#fff"
    },
    fullScreen: {
      type: Boolean,
      value: 0
    },
    openApi: {
      type: Boolean,
      value: !0
    },
    custom: {
      type: Boolean,
      value: !1
    }
  },
  data: {},
  attached() {
    this._changeStatus(), this.data.openApi && this._init()
  },
  pageLifetimes: {
    show() {
      this._init()
    }
  },
  methods: {
    _init() {
      wx.lin = wx.lin || {}, wx.lin.showStatusShow = e => {
        const {
          type: t = "success",
          image: a = "",
          describe: s = "",
          buttonText: i = "",
          bgColor: r = "#fff",
          fullScreen: o = !0
        } = {
          ...e
        };
        this.setData({
          show: !0,
          type: t,
          image: a,
          describe: s,
          buttonText: i,
          bgColor: r,
          fullScreen: o
        })
      }, wx.lin.hideStatusShow = () => {
        this.setData({
          show: !1
        })
      }
    },
    _changeStatus() {
      const e = this.data.type;
      if (e) switch (e) {
        case "success":
          this.setData({
            typeImage: "image/success.png",
            typeText: "操作成功~"
          });
          break;
        case "error":
          this.setData({
            typeImage: "image/error.png",
            typeText: "操作失败~"
          });
          break;
        case "cart":
          this.setData({
            typeImage: "image/cart.png",
            typeText: "购物车空空如也，去逛逛吧~"
          });
          break;
        case "order":
          this.setData({
            typeImage: "image/order.png",
            typeText: "您暂时还没有订单哦~"
          });
          break;
        case "network":
          this.setData({
            typeImage: "image/network.png",
            typeText: "糟糕！网络错误~"
          });
          break;
        case "address":
          this.setData({
            typeImage: "image/address.png",
            typeText: "您暂时还没有地址哦~"
          });
          break;
        case "product":
          this.setData({
            typeImage: "image/product.png",
            typeText: "暂时还没有商品哦~~"
          });
          break;
        case "data":
          this.setData({
            typeImage: "image/data.png",
            typeText: "暂时还没有相关数据哦~~"
          });
          break;
        default:
          console.warn(e + " is not a valid value")
      }
    },
    tapStatusShow() {
      this.triggerEvent("lincorvertap", {}, {
        bubbles: !0,
        composed: !0
      })
    }
  }
});