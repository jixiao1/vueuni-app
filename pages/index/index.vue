<template>
	<view class="content">
	<!-- 	<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
		<!-- <view>首页</view> -->
		<view class="swipers">
			<swiper indicator-dots indicator-color="rgba(110, 27, 60, .3)" circular autoplay>
				<swiper-item v-for="item in swipers" :key="item.id">
					<image src="https://aecpm.alicdn.com/simba/img/TB1j4LLKpXXXXcbaXXXSutbFXXX.jpg"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index"
			@click="goTabber(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.text}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="content">
			<view class="contentTop">推荐商品</view>
			<goodsList :Lists="Lists" @goDetailHandler="goDetail"></goodsList>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods_list/goods_list.vue'
	export default {
		data() {
			return {
				// title: 'Hello'
				swipers: [],
				Lists: [],
				navs: [
					{
						icon: 'iconfont icon-ziyuan',
						text: '黑马超市',
						path: '/pages/shop/shop'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						text: '联系我们',
						path: '/pages/linkmy/linkmy'
					},
					{
						icon: 'iconfont icon-tupian',
						text: '社区图片',
						path: '/pages/qushe/qushe'
					},
					{
						icon: 'iconfont icon-shipin',
						text: '学习视频',
						path: '/pages/learn/learn'
					}
				]
			}
		},
		onLoad() {
			this.getSwiper()
			this.getList()
		},
		methods: {
			async getSwiper() {
				const res = await this.$myRequest({
					url: 'api/getlunbo'
				})
				// console.log(res)
				let { message } = res.data
				this.swipers = message
			},
			async getList () {
				const res = await this.$myRequest({
					url: 'api/getgoods?pageindex=1'
				})
				let { message} = res.data
				this.Lists = message
				console.log(this.Lists)
			},
			goTabber (url) {
				console.log(url)
				uni.navigateTo({
					url
				})
			},
			goDetail (id) {
				console.log(id)
				uni.navigateTo({
					url:"/pages/goods_detail/goods_detail?id="+id
				})
			}
		},
		components:{
			goodsList
		}
	}
</script>

<style lang="scss">
.content {
	.swipers {
		swiper {
			width: 750rpx;
			height: 380rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.nav {
		display: flex;
		.nav_item {
			width: 25%;
			text-align: center;
			view {
				width: 120rpx;
				height: 120rpx;
				background: #B50E03;
				border-radius: 50%;
				line-height: 120rpx;
				font-size: 50rpx;
				color: #FFFFFF;
				margin: 10px auto;
			}
			text {
				font-size: 30rpx;
			}
		}
	}
	.content {
		background: #EEEEEE;
		padding-top: 10rpx;
		.contentTop {
			width: 750rpx;
			height: 50rpx;
			line-height: 50rpx;
			background: #FFFFFF;
			color: #b50e03;
			text-align: center;
			letter-spacing: 20rpx;
		}
	}
}
</style>
