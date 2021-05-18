import weRequest from "../../utils/weRequest";
const tools = require('../../utils/tools'),
setting = require('../../utils/setting'),
netools = require('../../utils/netools');
// pages/postDetail/postDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:[],
    slugs: [],
    price: 0,
    oldPrice: 0,
    showOrInputPrice: true, // true -> show  false ->input
    oldshowOrInputPrice: true,
    contentText: "", // 输入框
    titleText: "",
    placeActive: -1, // 标记当前选择的位置
    placeList: [],
    slugList: [],
  },
  getSlugs: function () {
    var retval = [];
    for (var i = 0; i < this.data.slugList.length; i++) {
      if (this.data.slugList[i].select) {
        retval.push(this.data.slugList[i]);
      }
    }
    return retval;
  },
  postGood: function () {
    var data = this.data;
    data.slugs = this.getSlugs();
    var self = this;
    if (data.titleText.length == 0) {
      wx.showToast({
        icon: "error",
        title: '请输入title',
      });
      return;
    } else if (data.slugs.length == 0) {
      wx.showToast({
        icon: "error",
        title: '请选择一个分类',
      });
      return;
    } else if (data.placeActive == -1) {
      wx.showToast({
        icon: "error",
        title: '请选择宁的位置',
      });
      return;
    } else if (data.price == 0) {
      wx.showModal({
        cancelColor: 'cancelColor',
        title: "tip",
        content: "你还没有填写价格，确定以0元发布吗？",
        showCancel: true,
        success(res) {
          if (res.cancel) {
            console.log('用户点击取消');
            return;
          } else {
            console.log('用户点击confirm');
            // 继续上传文件
            self.uploadsImg();
          }
        }
      });
      return;
    } else {
      self.uploadsImg();
    }

  },

  getImgUrl: function (url) {
    return new Promise(function (resolve, reject) {
      var reg = /^((http|https):\/\/tmp)/;
      var regc = /^wxfile:\/\//;
      if (!reg.test(url) && !regc.test(url)) {
        console.log("无需上传");
        resolve(url);
        return;
      }
      weRequest.uploadFile({
        url: setting.fileUrl,
        filePath: url,
        name: 'upfile',
        showLoading: "上传图片...",
        success: function (e) {
          console.log("我在请求成功内!");
          wx.showToast({
            title: '上传成功!',
          })
          resolve(e.url);
          return;
        },
        fail: function (e) {
          console.log("我在失败请求内");
          reject("上传图片失败");
          return;
        }
      })
    })
  },
  // 用户点确认继续发布   上传图片 获取url数组
  uploadsImg: function () {
    // 清空 imgurl 获取所有选择图片地址上传返回
    this.data.imgUrl = [];
    const pk = this.selectComponent('#img-picker');
    console.log(this.data.imgUrl);
    var list = pk.linGetValue();
    // 上传图片 获取外链
    console.log("start upload img");
    var flag = 0;
    for (var i = 0; i < list.length; i++) {
      this.getImgUrl(list[i])
        .then((res) => {
          console.log("then");
          this.data.imgUrl.push(tools.urlFac(res));
          flag++;
          console.log(i);
          console.log(list);
          console.log(i == list.length);
          if (flag == list.length) {
            // 请求成功，继续post
            this.postGoods();
          }
        }).catch((res) => {
          wx.showToast({
            icon: "error",
            title: '上传失败！',
          });
          console.log(res);
          return;
        })

    }
    console.log("我在循环外，后面");
  },
  postGoods: function () {
    var data = this.data;
    var good = {
      good: {
        price: data.price,
        oldprice: data.oldPrice,
        place: data.placeList[data.placeActive].status,
        links: data.imgUrl,
        title: data.titleText,
        content: data.contentText,
        slugs: this.getSlugs()
      }
    };
    weRequest.request({
      method: "POST",
      url: 'goods/post',
      showLoading: true,
      data: good,
      success: function (data) {
        console.log(data);
        wx.showToast({
          title: '发布成功',
        })
      },
      fail: function () {
        wx.showToast({
          icon: "error",
          title: '失败！',
        })
      }
    })
  },
  titleInputBlur: function (e) {
    console.log(e);
    this.data.titleText = e.detail.value;
    console.log(this.data.titleText);
  },
  contentInputBlur: function (e) {
    console.log(e);
    this.data.contentText = e.detail.value;
    console.log(this.data.contentText);
  },
  imgpickerremove: function (e) {
    console.log(e);
    console.log();
    const pk = this.selectComponent('#img-picker');
    console.log(this.data.imgUrl);
    console.log(pk.linGetValue());
  },
  imgpickeradd: function (e) {
    var detail = e.detail;
    let self = this;
    const pk = this.selectComponent('#img-picker');
    console.log("imgIrl");
    console.log(this.data.imgUrl);
    console.log("pk :list");
    var list = pk.linGetValue();
    console.log(list);
  },

  oldPriceInputBox: function (e) {
    console.log("blur input");
    this.setData({
      oldshowOrInputPrice: true,
      oldPrice: e.detail.value
    });
    console.log(e);
  },
  oldpricetab: function (e) {
    console.log(this.data.oldshowOrInputPrice);
    this.setData({
      oldshowOrInputPrice: false
    });
  },
  inputbox: function (e) {
    console.log("blur input");
    this.setData({
      showOrInputPrice: true,
      price: e.detail.value
    });
    console.log(e);
  },
  pricetab: function (e) {
    console.log(this.data.showOrInputPrice);
    this.setData({
      showOrInputPrice: false
    });
    console.log(this.data.showOrInputPrice);
    console.log("tab price")
  },
  tagstab: function (e) {
    var tar = e.target;
    var varable = "slugList[" + tar.id + "].select";
    if (this.data.slugList[tar.id].select == true) {
      console.log(varable);
      this.setData({
        [varable]: false
      });
    } else {
      this.setData({
        [varable]: true
      });
    }
    console.log(this.data.slugList);
  },
  placetab: function (e) {
    this.setData({
      placeActive: e.target.id
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("postdetail onload");
    console.log(options);
    if (options.gid == null || options.gid == ""){
      console.log("has no gid");
      wx.showModal({
        title:"错误的商品id！",
        showCancel:false,
        confirmText:"返回",
        cancelColor: 'cancelColor',
        success(){
          wx.navigateBack();
        }
      })
    }
    
    let that = this;
    console.log("getgoodbygid");
    netools.getGoodsByGid(options.gid)
    .then(res =>{
      var good = res;
      
      console.log("this");
      console.log(this);
      console.log(that);
      const uid = wx.getStorageSync('UID');
      console.log(uid);
      if (good.uid != uid){
        wx.showModal({
          title:"您没有权限！",
          showCancel:false,
          confirmText:"返回",
          cancelColor: 'cancelColor',
          success(){
            wx.navigateBack();
          }
        })
        return;
      }
      that.setData({
        price:good.price,
        oldPrice:good.oldprice,
        titleText:good.title,
        contentText:good.content,
        imgUrl:good.urls
      })
    }).catch(res =>{
      console.log("获取失败");
      console.log(res);
      wx.showModal({
        title:"出错了！",
        showCancel:false,
        confirmText:"返回",
        cancelColor: 'cancelColor',
        success(){
          wx.navigateBack();
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("postdetail ready");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
    console.log("postdetail onshow");
    var slug = getApp().globalData.slugList;
    var place = getApp().globalData.placeList;
    console.log(slug);
    console.log(place);
    for (var i = 0; i < slug.length; i++) {

    }
    this.setData({
      ['slugList']: slug,
      ['placeList']: place
    });
    console.log(this.data.slugList);

    console.log(this.data.placeList);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("postdetail hide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("postdetail unload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("postdetail onshow");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("到底了")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})