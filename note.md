## 小程序原生不支持 VUE 的 keep alive 属性，所以在切换组件以后，在切换回，无法保证数据不变。

### 解决方案
改用hidden 属性，使组件动态隐藏显示。
**注意** hidden 属性无法直接作用于组件和非块及元素，所以在组件外套一个view即可

## success回调函数为什么使用this.setData报错
是因为success方法指向闭包，所以this属于闭包，由此在success回调函数里是不能直接使用this.setData()的，如果我们要使用的话，可以在闭包之外先把this赋值给另一个变量。
```
bindViewTap: function() {
    let self = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        // 临时路径，每次获取都不一样
        const tempFilePaths = res.tempFilePaths
        self.setData({userPic: tempFilePaths[0]})
         //  success方法指向闭包，所以this属于闭包，由此在success回调函数里是不能直接使用this.setData()的，如果我们要使用的话，可以在闭包之外先把this赋值给另一个变量。
      }
    })
  },

```
