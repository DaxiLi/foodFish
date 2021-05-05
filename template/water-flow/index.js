import eventUtil from "../../miniprogram_npm/lin-ui/core/utils/event-util";
Component({
  properties: {
    columnGap: {
      type: String,
      value: "20rpx"
    }
  },
  data: {
    data: [],
    leftData: [],
    rightData: []
  },
  attached() {
    this._init()
  },
  pageLifetimes: {
    show() {
      this._init()
    }
  },
  methods: {
    _init() {
      wx.lin = wx.lin || {}, wx.lin.renderWaterFlow = (t = [], e = !1, a) => {
        if ("[object Array]" !== Object.prototype.toString.call(t)) return console.error("[data]参数类型错误，渲染失败"), !1;
        this.setData({
          data: t
        }), e && (this.data.leftData = [], this.data.rightData = []), this._select(t, e).then(() => {
          a && a()
        }).catch(t => {
          console.error(t)
        })
      }
    },
    _select(t, e) {
      const a = wx.createSelectorQuery().in(this);
      return this.columnNodes = a.selectAll("#left, #right"), new Promise(a => {
        this._render(t, 0, e, () => {
          a()
        })
      })
    },
    _render(t, e, a, i) {
      (t.length > e || a) && 0 !== this.data.data.length ? this.columnNodes.boundingClientRect().exec(h => {
        const r = h[0];
        this.data.leftHeight = r[0].height, this.data.rightHeight = r[1].height, this.data.leftHeight <= this.data.rightHeight || a ? this.data.leftData.push(t[e]) : this.data.rightData.push(t[e]), this.setData({
          leftData: this.data.leftData,
          rightData: this.data.rightData
        }, () => {
          this._render(t, ++e, !1, i)
        })
      }) : i && i()
    },
    onTapItem(t) {
      eventUtil.emit(this, "linitemtap", {
        item: t.currentTarget.dataset.item
      })
    }
  }
});