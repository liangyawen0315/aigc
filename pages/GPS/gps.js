// index.js  
Page({  
  data: {  
    keywords: '',  
    city: '',  
    result: ''  
  },  
  bindKeywordsInput: function(e) {  
    this.setData({  
      keywords: e.detail.value  
    })  
  },  
  bindCityInput: function(e) {  
    this.setData({  
      city: e.detail.value  
    })  
  },  
  submitForm: function() {  
    const that = this;  
    wx.request({  
      url: 'http://127.0.0.1:5000/search', // 替换为您的 Flask 服务器 URL  
      method: 'GET',  
      data: {  
        keywords: that.data.keywords,  
        city: that.data.city  
      },  
      success: function(res) {  
        that.setData({  
          result: JSON.stringify(res.data) // 假设后端返回的是 JSON 数据  
        });  
      },  
      fail: function(err) {  
        console.error('请求失败：', err);  
      }  
    });  
  }  
})