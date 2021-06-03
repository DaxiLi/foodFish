Component({
  data: {
    postPopShow:false,
    bgColor: null,
    bgImg: null,
    list: [{
        "pageName": "home",
        "pagePath": "/pages/home/home",
        "text": "逛一逛",
        "iconPath": "/assest/icon/eye.png",
        "selectedIconPath": "/assest/icon/close.png"
      },
      // {
      //   "pageName": "bbs",
      //   "pagePath": "/pages/bbs/bbs",
      //   "text": "发现",
      //   "iconPath": "/assest/icon/ellipsis.png",
      //   "selectedIconPath": "/assest/icon/close.png"
      // },
      {
        "pageName": "postPage",
        "pagePath": "/pages/postGoods/postGoods",
        "text": "发布",
        "style": "circle",
        "iconPath": "/assest/icon/add.png",
        "selectedIconPath": "/assest/icon/close.png"
      },
      // {
      //   "pageName": "chatMsg",
      //   "pagePath": "/pages/chatMsg/chatMsg",
      //   "text": "消息",
      //   "redDot": "3",
      //   "iconPath": "/assest/icon/comment.png",
      //   "selectedIconPath": "/assest/icon/close.png"
      // },
      {
        "pageName": "my",
        "pagePath": "/pages/my/my",
        "text": "我的",
        "iconPath": "/assest/icon/user.png",
        "selectedIconPath": "/assest/icon/close.png"
      }
    ],
    textSelectedColor: "#3963bc",
    textColor: "#666",
    selectedIndex: 0
  },
  pageLifetimes: {
    show: function () {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selectedIndex: 0
        })
      }
    }
  },
  methods: {
    parseCurrentPage() {
      // const t = "/" + getCurrentPages()[0].route,
      //   e = this.data.list;
      // let i;
      // for (let a = 0; a < e.length; a++)
      //   if (e[a].pagePath === t) {
      //     i = a;
      //     break
      //   } if (void 0 === i) return;

      // console.log(" parseCurrentPage");
      // this.setData({
      //   selectedIndex: 0
      // });

      // const a = this.data.list[i];
      // eventUtil.emit(this, "linchange", {
      //   index: i,
      //   item: a
      // })
    },
    tabPost(e){
      console.log("tab post confirm");
      this.setData({
        postPopShow:false
      });
      wx.navigateTo({
        url: '/pages/postDetail/postDetail?gid=-1',
      })
    },
    tabCancel(e){
      console.log("tab btn cancel");
      this.setData({
        postPopShow:false
      })
    },
    onTapItem(e) {
      // const i = t.currentTarget.dataset.index,
      //   url = this.data.list[i].pagePath;
      // eventUtil.emit(this, "lintap", {
      //   index: e,
      //   item: this.data.list[e]
      // });
      // const data = t.currentTarget.dataset
      // console.log(data);
      const index = e.currentTarget.dataset.index
      console.log(e);
      console.log(index);
      const url = this.data.list[index].pagePath;
      if (this.data.list[index].pageName == "postPage"){
        this.setData({
          postPopShow:true
        })
        return;
      }
      wx.switchTab({url})
      this.setData({
        selectedIndex: index
      })
      // this.triggerEvent("clickTabItem", t.currentTarget.dataset.index,{ bubbles: true });
    }
  }
});