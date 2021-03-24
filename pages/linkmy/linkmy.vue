<template>
	<view class="linkmy">
		<view class="imgs">
			<image src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		</view>
		<view class="contentList">
			<view class="phone" @click="phone">联系电话：15870975022( 点击拨打 )</view>
			<view class="address phone">居住地址：深圳市宝安区西
			乡街道黄田文楼路东七巷八号海雅居</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	// 113.849018,22.633263
	export default {
		data () {
			return {
				longitude: 113.849018,
				latitude: 22.633263,
				markers: [
					{
						longitude: 113.849018,
						latitude: 22.633263,
						iconPath: "../../static/logo.png",
						width: 30,
						height: 30
					}
				]
			}
		},
		methods: {
			phone () {
				uni.makePhoneCall({
					phoneNumber: '15870975022'
				})
			}
		}
	}
</script>

<style lang="scss">
	.linkmy {
		.imgs {
			width: 750rpx;
			height: 320rpx;
			image {
				width: 100%;
				height: 100%;
				display: block;
			}
		}
		.contentList {
			padding-left: 20rpx;
			box-sizing: border-box;
			font-size: 30rpx;
			.phone {
				line-height: 60rpx;
				height: 60rpx;
				border-bottom: 1px solid red;
			}
		}
		.map {
			width: 750rpx;
			height: 750rpx;
			margin-top: 10rpx;
		}
	}
</style>
