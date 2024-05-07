Page({  
  data: {  
    age: '',  
    character: '',  
    destination: '',  
    days: '',  
    result: ''  
  },  
  
  bindAgeInput: function(e) {  
    this.setData({  
      age: e.detail.value  
    });  
  },  
  
  bindCharacterInput: function(e) {  
    this.setData({  
      character: e.detail.value  
    });  
  },  
  
  bindDestinationInput: function(e) {  
    this.setData({  
      destination: e.detail.value  
    });  
  },  
  
  bindDaysInput: function(e) {  
    this.setData({  
      days: e.detail.value  
    });  
  },  
  
  submitForm: function() {  
    const age = this.data.age;  
    const character = this.data.character;  
    const destination = this.data.destination;  
    const days = this.data.days;  
  
    // 拼接问题  
    const question = '我的年龄是' + age + '我的目的地是' + destination + '我的性格是' + character + '我想旅游' + days + '天，请先输出我的人物形象，并一定根据我的年龄和性格为我制定适合我的方案，如果我内向，尽可能去一些互动少的地方，如果我外向，尽可能去一些互动多一些的地方';  
  
    // 调用后端API  
    wx.request({  
      url: 'http://127.0.0.1:5000/ask', // 替换为你的Flask服务器URL  
      method: 'POST',  
      data: {  
        question: question  
      },  
      success: res => {  
        // 假设后端返回的是JSON格式的数据  
        this.setData({  
          result: res.data.answer  
        });  
      },  
      fail: err => {  
        console.error('请求失败:', err);  
        this.setData({  
          result: '请求失败，请检查网络或服务器状态。'  
        });  
      }  
    });  
  }  
});