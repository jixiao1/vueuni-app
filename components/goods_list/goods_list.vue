<template>
	<view class="goods_list">
			<view class="goods_item" v-for="item in Lists" :key="item.id" @click="goDetail(item.id)">
				<image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201110%2F20%2F104212ds59m9rtqspt6tzt.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618928615&t=2c506cbb1d25e4d18e432b9f67e1bb13"></image>
				<view class="price">
					<text>￥{{item.market_price}}</text>
					<text>￥{{item.sell_price}}</text>
				</view>
				<view class="name">
					{{item.title}}
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		props: ['Lists'],
		methods:{
			goDetail (id) {
				console.log(id)
				this.$emit('goDetailHandler', id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
			padding: 0 15rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.goods_item {
				background: #fff;
				width: 355rpx;
				margin: 10rpx 0;
				padding: 15rpx;
				box-sizing: border-box;
				image{
					width: 80%;
					height: 150px;
					display: block;
					margin: auto;
				}
				.price{
					color: #b50e03;
					font-size: 36rpx;
					margin: 20rpx 0 5rpx 0;
					text:nth-child(2){
						color: #ccc;
						font-size: 28rpx;
						margin-left: 17rpx;
						text-decoration: line-through;
					}
				}
				
				.name {
					font-size: 28rpx;
					line-height: 50rpx;
					padding-bottom: 15rpx;
					padding-top: 10rpx;
				}
			}
		}
</style>
