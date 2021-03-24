<template>
	<view class="news_detail">
		<view class="title">{{newsArr.title}}</view>
		<view class="info">
			<text>发表时间：{{newsArr.add_time | setTime}}</text>
			<text>预览：{{newsArr.click}}</text>
		</view>
		<view class="content">
		  <rich-text :nodes="newsArr.content"></rich-text>
		</view>
	</view>
</template>

<script>
	 export default {
		 data () {
			 return {
				 id: '',
				 newsArr: []
			 }
		 },
		 methods:{
			 async getNews () {
				 const res = await this.$myRequest({
					 url: 'api/getnew/'+ this.id
				 })
				 console.log(res)
				 let {message} = res.data
				 this.newsArr = message[0]
				 console.log(this.newsArr)
				 
			 }
		 },
		 onLoad(option) {
			 // console.log(option)
			 this.id = option.id
			 this.getNews()
		 }
	 }
</script>

<style lang="scss">
	.news_detail {
		padding: 10rpx;
		box-sizing: border-box;
		.title {
			text-align: center;
		}
		.info {
			display: flex;
			justify-content: space-between;
			margin-top: 20rpx;
		}
		.content {
			margin-top: 20rpx;
		}
	}
</style>
