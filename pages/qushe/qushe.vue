<template>
	<view class="shequ">
			<scroll-view class="left" scroll-y>
				<view :class="activeIndex === index ? 'active' : ''" 
				v-for="(item,index) in cates" :key="item.cat_id"
				@click="clickHandler(index, item)">{{item.cat_name}}</view>
			</scroll-view>
			<scroll-view class="right" scroll-y>
			 <view class="item" v-for="(item,index) in cateChild[0]" :key="index">
				 <image :src="item.cat_icon" @click="preveimag(item.cat_icon)"></image>
				 <text>{{item.cat_name}}</text>
			 </view>
			 <view v-if="!cateChild[0]">没有数据</view>
			</scroll-view>
	</view>
</template>

<script>
	export default {
		data:function () {
			return {
				cates: [],
				activeIndex: 1,
				cateChild: []
			}
		},
		methods:{
			 getGKAN () {
				uni.request({
					url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
					success: res => {
						console.log(res)
						let {message} = res.data
						this.cates = message
						this.cateChild = this.cates.map(item => {
							return item
						})
						this.cateChild[this.activeIndex].children = this.cateChild[this.activeIndex].children.map(item => {
							return item.children
						})
						console.log(this.cateChild[this.activeIndex].children)
						this.cateChild = this.cateChild[this.activeIndex].children
					}
				})
			},
			clickHandler (index, item) {
				console.log(index,item.cat_id)
				this.cateChild = item.children
				this.activeIndex = index
				console.log(this.cateChild)
				this.cateChild = this.cateChild.map(item => {
						return item
				})
				console.log(this.cateChild)
				this.cateChild = this.cateChild.map(item => {
					return item.children
				})
				console.log(this.cateChild)
				// this.cateChild = 
			},
			// 预览图片
			preveimag (current) {
				const urls = this.cateChild[0].map(item => {
					return item.cat_icon
				})
				// console.log(urls)
				uni.previewImage({
					current,
					urls
				})
				
			}
		},
		onLoad() {
			this.getGKAN()
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		.shequ {
			height: 100%;
			display: flex;
			.left {
				width: 200rpx;
				height: 100%;
				border-right: 1px solid #EEEEEE;
				view {
					height: 60px;
					line-height: 60px;
					text-align: center;
					font-size: 30rpx;
					color: #333333;
					border-top: 1px solid #EEEEEE;
				}
				.active {
					background-color: red;
					color: #FFFDEF;
				}
			}
			.right {
				height: 100%;
				width: 520rpx;
				margin: 0 auto;
				.item {
					position: relative;
					image {
						width: 450rpx;
						height: 450rpx;
						display: block;
						border-radius: 5rpx;
					}
					text {
						font-size: 30rpx;
						line-height: 30rpx;
						position: absolute;
						left: 50%;
						bottom: 0%;
					}
				}
			}
		}
	}
</style>

 
 
<!-- // <template>
 // 	<view class="pics">
 // 		<scroll-view class="left" scroll-y>
 // 			<view 
 // 			@click="leftClickHandle(index,item.id)"
 // 			:class="active===index?'active':''" 
 // 			v-for="(item,index) in cates" 
 // 			:key="item.id">
 // 			  {{item.title}}
 // 			</view>
 // 		</scroll-view>
 // 		<scroll-view class="right" scroll-y>
 // 			<view class="item" v-for="item in secondData" :key="item.id">
 // 				<image @click="previewImg(item.img_url)" src="https://www.baidu.com/img/flexible/logo/pc/result.png"></image>
 // 				<text>{{item.title}}</text>
 // 			</view>
 // 			<text v-if="secondData.length === 0">暂无数据</text>
 // 		</scroll-view>
 // 	</view>
 // </template>
 
 // <script> -->
 // 	export default {
 // 		data() {
 // 			return {
 // 				cates: [],
 // 				active: 0,
 // 				secondData: []
 // 			}
 // 		},
 // 		methods: {
 // 			async getPicsCate () {
 // 				const res = await this.$myRequest({
 // 					url: 'api/getimgcategory'
 // 				})
 // 				this.cates = res.data.message
 // 				this.leftClickHandle(0,this.cates[0].id)
 // 			},
 // 			async leftClickHandle (index,id) {
 // 				this.active = index
 // 				// 获取右侧的数据
 // 				const res = await this.$myRequest({
 // 					url: 'api/getimages/'+id
 // 				})
 // 				this.secondData = res.data.message
 // 			},
 // 			previewImg (current) {
 // 				const urls = this.secondData.map(item=>{
 // 					return item.img_url
 // 				})
 // 				uni.previewImage({
 // 					current,
 // 					urls
 // 				})
 // 			}
 // 		},
 		
 // 		onLoad () {
 // 			this.getPicsCate()
 // 		}
 // 	}
 // </script>
 
 // <style lang="scss">
 // page{
 // 	height: 100%;
 // }
 // .pics{
 // 	height: 100%;
 // 	display: flex;
 // 	.left{
 // 		width: 200rpx;
 // 		height: 100%;
 // 		border-right:1px solid #eee;
 // 		view{
 // 			height: 60px;
 // 			line-height: 60px;
 // 			color: #333;
 // 			text-align: center;
 // 			font-size: 30rpx;
 // 			border-top:1px solid #eee;
 // 		}
 // 		.active{
 // 			background: #b30501;
 // 			color: #fff;
 // 		}
 // 	}
 // 	.right{
 // 		height: 100%;
 // 		width: 520rpx;
 // 		margin: 10rpx auto;
 // 		.item{
 // 			image{
 // 				width: 520rpx;
 // 				height: 520rpx;
 // 				border-radius: 5px;
 // 			}
 // 			text{
 // 				font-size: 30rpx;
 // 				line-height: 60rpx;
 // 			}
 // 		}
 // 	}
 // }
 // </style>
