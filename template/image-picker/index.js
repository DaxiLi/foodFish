import nodeUtil from "../core/utils/node-util";
import deviceUtil from "../utils/device-util";
import eventUtil from "../core/utils/event-util";
import {
  promisic
} from "../utils/util";
Component({
  options: {
    pureDataPattern: /urls|cells|preview|remove|sizeType|maxImageSize|clear/
  },
  behaviors: ["wx://form-field"],
  externalClasses: ["l-class", "l-item-class"],
  properties: {
    urls: {
      type: Array,
      value: null
    },
    cells: {
      type: Array,
      value: null
    },
    size: {
      type: Number,
      value: null
    },
    mode: {
      type: String,
      value: "scaleToFill"
    },
    preview: {
      type: Boolean,
      value: !0
    },
    remove: {
      type: Boolean,
      value: !0
    },
    count: {
      type: Number,
      value: 9
    },
    sizeType: {
      type: Array | String,
      value: ["original", "compressed"]
    },
    maxImageSize: {
      type: Number,
      value: 0
    },
    clear: {
      type: Boolean,
      value: !1
    },
    custom: {
      type: Boolean,
      value: !1
    },
    value: {
      type: Array,
      value: []
    }
  },
  data: {
    itemSizePercentage: null
  },
  observers: {
    clear(e) {
      e && (console.warn("clear 属性已废弃，请使用 linClearImage 函数 或 urls 属性清空图片\n 详情信息参考："), this.setData({
        value: [],
        clear: !1
      }))
    },
    "urls,cells": function (e, t) {
      if (!e && !t) return;
      let a = [];
      if (e) a = e;
      else if (t)
        for (const e of t) Object.prototype.hasOwnProperty.call(e, "url") && a.push(e.url);
      this.setData({
        value: a.slice(0, this.data.count)
      })
    },
    async size(e) {
      if (!e) return void this.setData({
        itemSizePercentage: null
      });
      const t = await nodeUtil.getNodeRectFromComponent(this, ".lin-image-picker__container"),
        a = 10 / e * 10 - 20 / deviceUtil.px2rpx(t.right - t.left) * 100 + "%;";
      this.setData({
        itemSizePercentage: a
      })
    },
    custom(e) {
      e && console.warn("custom 已弃用，请勿使用该属性，直接传入 slot 即可")
    }
  },
  methods: {
    onTapImage(e) {
      const t = this,
        a = this.data.value,
        i = e.currentTarget.dataset.imageIndex,
        l = a[i],
        r = {
          all: a,
          index: i,
          current: l
        };
      eventUtil.emit(this, "lintap", r), this.data.preview && wx.previewImage({
        urls: a,
        current: l,
        success() {
          eventUtil.emit(t, "linpreview", r)
        }
      }, !0)
    },
    onTapRemove(e) {
      const t = this.data.value,
        a = e.currentTarget.dataset.imageIndex,
        i = {
          all: t,
          index: a,
          current: t[a]
        };
      eventUtil.emit(this, "linremovetap", i), this.data.remove && this._removeImageByIndex(a)
    },
    async onTapAdd() {
      let {
        value: e,
        count: t,
        sizeType: a,
        maxImageSize: i
      } = this.data;
      const l = t - e.length;
      if (e.length >= t || l <= 0) return;
      const r = await promisic(wx.chooseImage)({
          count: l,
          sizeType: a,
          sourceType: ["album", "camera"]
        }),
        s = [],
        n = [];
      r.tempFiles.forEach(e => {
        const {
          path: t,
          size: a
        } = e;
        a > i && i > 0 ? n.push(t) : s.push(t)
      }), this.setData({
        value: e.concat(s)
      }, () => {
        const e = {
          all: this.data.value,
          current: s,
          oversize: n
        };
        eventUtil.emit(this, "linadd", e), eventUtil.emit(this, "linchange", e), eventUtil.emit(this, "linoversize", e)
      })
    },
    getValues() {
      return this.data.value
    },
    _removeImageByIndex(e) {
      const t = this.data.value,
        a = t[e];
      t.splice(e, 1);
      const i = {
        index: e,
        current: a,
        all: t
      };
      this.setData({
        value: t
      }, () => {
        eventUtil.emit(this, "linremove", i)
      })
    },
    linRemoveImage(e) {
      this._removeImageByIndex(e)
    },
    linClearImage() {
      this.setData({
        value: []
      })
    },
    linGetValue() {
      return this.data.value
    }
  }
});