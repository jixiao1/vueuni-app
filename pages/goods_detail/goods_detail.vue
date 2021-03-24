<template>
	<view class="goods_detail">
			<swiper class="goods" indicator-dots indicator-color="rgba(120, 20, 90, .3)" autoplay>
				<swiper-item v-for="(item,indx) in swipers" :key="indx" class="goods_item">
					<image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.zbjimg.com%2Ftianpeng%2F2015-11%2F14%2Fproduct%2F5646e9d57392f.jpg&refer=http%3A%2F%2Fp7.zbjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619096958&t=5db906ff2f6c74c0e9e21f875b44de55"></image>
				</swiper-item>
			</swiper>
		<view class="box1">
			<view class="info">
					<text>￥{{getNewsInfo1.sell_price}}</text>
				<text>￥{{getNewsInfo1.market_price}}</text>
			</view>
			<view class="descinfo">
				{{getNewsInfo1.title}}
			</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view class="case">货号：{{getNewsInfo1.goods_no}}</view>
			<view class="kuchun">
				库存：{{getNewsInfo1.stock_quantity}}
			</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">
				<text>G系列全面支持Windows 8 简体中文版，在秉承了坚实耐用、稳定可靠的产品指纹的同时，金属版本全金属C面令笔记本更加安全可靠。搭载独立显卡在游戏和多媒体方面较上一代显卡最高可实现两倍性能提升，提供更加强大的笔记本体验。杜比环绕立体声音效，轻松拥有影院级高品质享受；更可以通过HDMI接口连接3D电视，实现坐拥私家3D影院的梦想！
				</text>
			</view>
		</view>
		<view class="goodsNav">
			<uni-goods-nav :fill="true"  :options="options" 
			:buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data () {
			return {
				id: '',
				swipers: [],
				getNewsInfo1: [],
				content: '',
				options: [{
				            icon: 'headphones',
				            text: '客服'
				        }, {
				            icon: 'shop',
				            text: '店铺',
				            info: 2,
				            infoBackgroundColor:'#007aff',
				            infoColor:"red"
				        }, {
				            icon: 'cart',
				            text: '购物车',
				            info: 2
				        }],
				        buttonGroup: [{
				          text: '加入购物车',
				          backgroundColor: '#ff0000',
				          color: '#fff'
				        },
				        {
				          text: '立即购买',
				          backgroundColor: '#ffa200',
				          color: '#fff'
				        }
				        ]
			}
		},
		methods:{
			async getSwiper () {
				const res = await this.$myRequest({
					url: 'api/getthumimages/'+this.id
				})
				// console.log(res)
				let {message} = res.data
				this.swipers = message
				// console.log(this.swipers)
			},
			async getNewsInfo () {
				const res = await this.$myRequest({
					url: 'api/goods/getinfo/'+this.id
				})
				// console.log(res)
				let {message} = res.data
				this.getNewsInfo1  = message[0]
				// console.log(this.getNewsInfo1)
				
			},
			async getDescInfo () {
				const res =await this.$myRequest({
					url: 'api/goods/getdesc/'+this.id
				})
				// console.log(res.data.message[0].content)
				this.content = res.data.message[0].content
			},
			 onClick (e) {
			        uni.showToast({
			          title: `点击${e.content.text}`,
			          icon: 'none'
			        })
					// console.log(e)
			      },
			      buttonClick (e) {
			        console.log(e)
			        this.options[2].info++
			      }
		},
		onLoad(options) {
			this.id = options.id
			this.getSwiper()
			this.getNewsInfo()
			this.getDescInfo()
		},
		 components: {uniGoodsNav}
	}
</script>

<style lang="scss">
	.goods_detail {
			.goods {
				.goods_item {
				    height: 700rpx;
					image {
						width: 100%;
						height: 100%;
						display: block;
					}
				}
			}
			.box1 {
				padding: 10rpx 20rpx;
				.info {
					text {
						font-size: 50rpx;
						color: #b50e00;
						font-weight: bold;
					}
					text:nth-child(2) {
						text-decoration: line-through;
						color: #EEEEEE;
						margin-left: 20rpx;
						font-size: 30rpx;
					}
				}
				.descinfo {
					font-size: 35rpx;
					margin-top: 10rpx;
				}
			}
			.line {
				width: 750rpx;
				height: 10rpx;
				background-color: #EEEEEE;
				margin-top: 20rpx;
			}
			.box2 {
				padding: 10rpx 20rpx;
				view {
					font-size: 35rpx;
					height: 60rpx;
					line-height: 60rpx;
				}
			}
			.box3 {
				font-size: 40rpx;
				padding: 10rpx;
				color: #333333;
				padding-bottom: 50rpx;
			}
			.goodsNav {
			   position: fixed;
			   width: 100%;
			   bottom: 0;
			}
				
	}
</style>
