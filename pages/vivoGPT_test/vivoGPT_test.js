Page({  
  data: {  
    question: '',  
    answer: ''  
  },  
  inputChange: function(e) {  
    this.setData({  
      question: e.detail.value  
    });  
  },  
  submitQuestion: function() {  
    const self = this;  
    wx.request({    
      url: 'http://127.0.0.1:5000/ask',
      method: 'POST',    
      data: {    
        question: self.data.question    
      },    
      success(res) {    
        self.setData({    
          answer: res.data.answer    
        });    
      },  
      fail(error) {  
        console.error('请求失败：', error);  
      }  
    });
  }  
});