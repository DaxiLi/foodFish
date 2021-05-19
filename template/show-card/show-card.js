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
        oldprice: "100",
       gid: "",
        postDate: "",
        place:"",
        uid: "",
        userName: "",
        userHead: "../../image/1.jpg"
      }
    }
  },
tabGood(e){
  var gid = e.currentTarget.dataset.gid;
  console.log(e);
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