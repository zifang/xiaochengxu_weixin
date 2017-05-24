Page({
  data:{
    text:"录音结果"
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  start: function(){
     wx.startRecord({
        success: function (res) {
          wx.uploadFile({
            url: 'https://ihealth-wx.s1.natapp.cc/upload',
            filePath: res.tempFilePath,
            name: 'file',
            success: function (res) {
              // success
              console.log('begin');
              console.log(res.data);
              // var json = JSON.parse(res.data);
              // console.log(json.msg);
              // var jsonMsg = JSON.parse(json.msg);
              // console.log(jsonMsg.result);
            },
            fail: function (err) {
              console.log(err);
            }
          })
        },
        fail: function (res) {
          alert('录音失败' + JSON.stringify(res));
        }
      })
      setTimeout(function () {
        //结束录音  
        wx.stopRecord()
      },2000)
  },
  stop: function(){
    // wx.stopRecord({
    //   success: function(res){
    //     wx.showToast({
    //         title: '录音成功',
    //         icon: 'success',
    //         duration: 2000
    //     })
    //   },
    //   fail: function() {
    //     // fail
    //   }
    // })
  }
})