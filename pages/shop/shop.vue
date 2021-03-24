<template>
	<view class="goodsList">
		<!-- 下拉刷新触底加载 -->
		<goodsList :Lists="Lists" @goDetailHandler="goDetauk"></goodsList>
		<view v-if="flag" class="CHUDI">触底加载了~~</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods_list/goods_list.vue'
	export default {
		data:function () {
			return {
				Lists: [],
				pageindex: 1,
				flag: false
			}
		},
		onLoad() {
			this.getsList()
		},
		//  触底加载
		onReachBottom() {
			console.log('触底了')
			if (this.Lists.length< this.pageindex*10) return this.flag = true
			this.pageindex++
			this.getsList()
		},
		// 下拉刷新
		onPullDownRefresh() {
			console.log("下拉刷新")
			this.pageindex = 1
			this.Lists = []
			this.flag = false
			setTimeout(() => {
				this.getsList(() => {
					uni.stopPullDownRefresh()
				})
			}, 1000)
		},
		
		methods:{
			async getsList (callback) {
				const res = await this.$myRequest({
					url: 'api/getgoods?pageindex='+ this.pageindex
				})
				// console.log(res)
				let {message} = res.data
				// this.Lists = message
				//  数组的平接
				this.Lists = [...this.Lists, ...message]
				callback && callback()
			},
			goDetauk (id) {
				console.log(id)
				uni.navigateTo({
					url:'/pages/goods_detail/goods_detail?id='+id
				})
			}
		},
		components:{
			goodsList
		}
	}
</script>

<style lang="scss">
	.CHUDI {
		background-color: #333333;
		text-align: center;
		height: 60rpx;
		line-height: 60rpx;
		color: #FFFFFF;
	}
</style>
