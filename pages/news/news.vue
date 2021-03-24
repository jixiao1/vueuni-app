<template>
	<view class="news">
		<newsitem :News="News" @go="goDetail"></newsitem>
	</view>
</template>

<script>
	import newsitem from '../../components/news_item/news_item.vue'
	export default {
		data() {
			return {
				News: []
			}
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: 'api/getnewslist'
				})
				console.log(res)
				let {
					message
				} = res.data
				this.News = message
			},
			goDetail(id) {
				console.log(id)
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id='+id
				})
			}
		},
		onLoad() {
			this.getNews()
		},
		components: {
			newsitem
		}
	}
</script>

<style lang="scss">
	.news {
		display: flex;
		flex-direction: column;
	}
</style>
