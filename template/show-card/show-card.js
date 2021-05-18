// template/showCard.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object,
      value: {
        price: "99.99",
        oldPrice: "100",
        indexImage: "../../pic/skull-outline.svg",
        goodsId: "",
        shortComent: "暂无",
        postDate: "",
        goodsLocation: "暂无",
        userUid: "",
        userName: "",
        userHead: "../../image/1.jpg"
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    fileUrl : app.globalData.fileUrl
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})