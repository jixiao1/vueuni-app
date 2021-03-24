// const baseUrl = 'https://api-hmugo-web.itheima.net/'
// export const myRequest = (option) => {
// 	return new Promise((resolve, reject) => {
// 		uni.request({
// 			url: baseUrl + option.url,
// 			method: option.method || 'GET',
// 			data: option.data || {},
// 			success: res => {
// 				if (res.statusCode !== 200) {
// 					uni.showToast({
// 						title: '获取数据失败'
// 					})
// 				}
// 				// this.swipers = res.data.message
// 				// console.log(this.swipers)
// 				resolve(res)
// 			},
// 			fail() {
// 				return uni.showToast({
// 					title: '获取接口失败'
// 				})
// 				reject(error)
// 			}
// 		})
// 	})

const BASE_URL = 'http://localhost:8082/'
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res)=>{
				if(res.data.status !== 0) {
					return uni.showToast({
						title: '获取数据失败'
					})
				}
				resolve(res)
			},
			fail: (err)=>{
				uni.showToast({
					title: '请求接口失败'
				})
				reject(err)
			}
		})
	})
}
	// return new Promise((resolve, reject) => {

	// 	uni.request({
	// 		url: baseUrl+option.url,
	// 		method:option.method || 'GET',
	// 		data: option.data || {},
	// 		success: (res) => {
	// 			if (res.data.status !== 0) {
	// 				return uni.showToast({
	// 					title:'获取数据失败'
	// 				})
	// 			}
	// 			resolve(res)
	// 		},
	// 		fail: error => {
	// 			return uni.showToast({
	// 				title:'获取接口失败'
	// 			})
	// 			reject(error)
	// 		}
	// // 	})
	// }
