<template>
	<view>
		<view class="news_item" v-for="item in News" :key="item.id" @click="goDetail(item.id)">
			<image 
			src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2992691273,2777674412&fm=26&gp=0.jpg"></image>
				<view class="news_info">
					<view class="news_top">{{item.title}}</view>
					<view class="news_bottom">
						<text>发表时间：{{item.add_time | setTime}}</text>
						<text>浏览：{{item.click}}</text>
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		props:['News'],
		filters:{
			setTime(date) {
				// console.log(date)
				const newDate = new Date(date)
				const year = newDate.getFullYear()
				const month = newDate.getMonth().toString().padStart(2,0)
				const day = newDate.getDay().toString().padStart(2,0)
				return year + '-'+ month+ '-'+day
			}
		},
		methods: {
			goDetail(id) {
				this.$emit('go', id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		padding: 10rpx 15rpx;
		box-sizing: border-box;
		border-bottom: 1px solid #EEEEEE;
		image {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 200rpx;
		}
		.news_info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.news_top {
				font-size: 30rpx;
				margin-left: 20rpx;
			}
			.news_bottom {
				font-size: 30rpx;
				margin-left: 20rpx;
				text:nth-child(2) {
					margin-left: 10rpx;
				}
			}
		}
	}
</style>
