// miniprogram/pages/test/test.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	query: function (e) {
		wx.cloud.callFunction({
			name: 'sealsQuery',
			data: {
				queryString: e.detail.value
			},
			success: res => {
				console.log(res.result)
			},
			fail: err => {
				console.log(err)
			}
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

		// const db = wx.cloud.database()
		// db.collection('seals').where({name:db.RegExp({regexp:"一"})}).get().then(res=>{console.log(res.data)})
		// // console.log(db.collection('seals').count())


		// wx.cloud.downloadFile({
		//     fileID: 'cloud://seal-dict-4go11qn392fada40.7365-seal-dict-4go11qn392fada40-1304194631/my-image.png'
		//   }).then(res => {
		//     // get temp file path
		//     console.log(res.tempFilePath)
		//     // this.data.testImageUrl=res.tempFilePath
		//     this.setData({
		//         testImageUrl:res.tempFilePath
		//     })
		//   }).catch(error => {
		//     // handle error
		//   })
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})