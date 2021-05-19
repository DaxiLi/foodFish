import weRequest from './weRequest';
// const urlAppend =;//getApp().globalData.fileUrl;

const setting = require('./setting');
const getGoodsByKey = function(key,p,s) {
  return new Promise(function (rsolve, reject) {
    var rurl = 'goods/search';
    console.log(rurl);
    weRequest.request({
      method: 'GET',
      url: rurl,
      showLoading: true,
      data: {
        key:key,
        p: p,
        s: s
      },
      success(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          data[i].url = getApp().globalData.fileUrl + data[i].url;
        }
        console.log(data);
        rsolve(data);
      },
      fail(e) {
        reject(e)
      }
    })
  })
},
delGood = function(gid){
  return new Promise(function (rsolve, reject) {
    var rurl = 'goods/del/' + gid ;
    console.log(rurl);
    weRequest.request({
      method: 'POST',
      url: rurl,
      showLoading: true,
      data:{
        uid:wx.getStorageSync('UID')
      },
      success(data) {
        rsolve(data);
      },
      fail(e) {
        reject(e)
      }
    })
  })
},
getGoodsByUid = function (uid, page, num) {
  return new Promise(function (rsolve, reject) {
    var rurl = 'goods/user/' + uid;
    console.log(rurl);
    weRequest.request({
      method: 'GET',
      url: rurl,
      showLoading: true,
      data: {
        p: page,
        s: num
      },
      success(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          data[i].url = getApp().globalData.fileUrl + data[i].url;
        }
        console.log(data);
        rsolve(data);
      },
      fail(e) {
        reject(e)
      }
    })
  })
},
getGoodsByGid = function (gid){
  return new Promise(function (rsolve, reject) {
    var rurl = 'goods/details/' + gid;
    console.log(rurl);
    weRequest.request({
      method: 'GET',
      url: rurl,
      showLoading: true,
      success(data) {
        console.log(data);
        data.url = setting.fileUrl + data.url;
        for (var i = 0; i < data.urls.length; i++) {
          data.urls[i] = setting.fileUrl + data.urls[i];
        }
        console.log(data);
        rsolve(data);
      },
      fail(e) {
        reject(e)
      }
    })
  })
},
 getGoodsBySlug = function (slug, page, num) {
    console.log("netools slug");
    console.log(slug);
    return new Promise(function (rsolve, reject) {
      var rurl = 'goods/slug-' + slug;
      console.log(rurl);
      weRequest.request({
        method: 'GET',
        url: rurl,
        showLoading: true,
        data: {
          p: page,
          s: num
        },
        success(data) {
          console.log(data);
          for (var i = 0; i < data.length; i++) {
            data[i].url = getApp().globalData.fileUrl + data[i].url;
          }
          console.log(data);
          rsolve(data);
        },
        fail(e) {
          reject(e)
        }
      })
    })
  },
  getSlugs = function () {
    const APP = getApp();
    // 此方法不需要同步执行返回数据，只需要请求成功后将数据梵高globa data里面即可
    return new Promise(function (resolve, reject) {
      weRequest.request({
        method: "GET",
        url:  'goods/slug.json',
        showLoading: true,
        success: function (data) {
          resolve(data);
        },
        fail: function (e) {
          reject(e)
        }
      })
    })


  },
  getPlaces = function () {
    // 此方法不需要同步执行返回数据，只需要请求成功后将数据梵高globa data里面即可
    return new Promise(function (resolve, reject) {
      weRequest.request({
        method: "GET",
        url: 'goods/places.json',
        showLoading: true,
        success: function (data) {
          resolve(data);
        },
        fail: function (e) {
          reject(e);
        }
      })
    })
  }


export {
  getSlugs,
  getPlaces,
  getGoodsBySlug,
  getGoodsByGid,
  getGoodsByUid,
  delGood,
  getGoodsByKey
}