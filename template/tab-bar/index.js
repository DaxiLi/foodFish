import eventUtil from "../../miniprogram_npm/lin-ui/core/utils/event-util";
Component({
  properties: {
    bgColor: {
      type: String,
      value: null
    },
    bgImg: {
      type: String,
      value: null
    },
    selectedIndex: {
      type: Number,
      value: 0
    },
    list: {
      type: Array,
      value: []
    },
    textSelectedColor: {
      type: String,
      value: "#3963bc"
    },
    textColor: {
      type: String,
      value: "#666"
    }
  },
  data: {
    selectedIndex: 0
  },
  pageLifetimes: {
    show: function () {
      this.parseCurrentPage()
    }
  },
  methods: {
    parseCurrentPage() {
      const t = "/" + getCurrentPages()[0].route,
        e = this.data.list;
      let i;
      for (let a = 0; a < e.length; a++)
        if (e[a].pagePath === t) {
          i = a;
          break
        } if (void 0 === i) return;
      this.setData({
        selectedIndex: i
      });
      const a = this.data.list[i];
      eventUtil.emit(this, "linchange", {
        index: i,
        item: a
      })
    },
    onTapItem(t) {
      const e = t.currentTarget.dataset.index,
        i = this.data.list[e].pagePath;
      eventUtil.emit(this, "lintap", {
        index: e,
        item: this.data.list[e]
      });
      console.log(e);
      console.log(this.data.list[e].tabFunc);
      this.triggerEvent("clickTabItem", t.currentTarget.dataset.index,{ bubbles: true });
    }
  }
});