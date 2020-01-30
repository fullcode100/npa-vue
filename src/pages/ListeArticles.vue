<template>
	<Layout>
		<div class="list fit-content">
			<h1 class="title--accent">Liste des articles</h1>
			<LittleCard v-for="(article, key) in cardMap" :key="key"
				:title="article.title"
				:url="article.url"
				:date="article.date"
				:img="article.img"
			/>
		</div>
	</Layout>
</template>

<script>
import LittleCard from "@/components/LittleCard.vue"

export default {
	metaInfo: {
		title: "Liste des articles"
	},
	components: {
		LittleCard
	},
	computed: {
		cardMap () {
      		return [
        		...this.edges.map(edge => {
          			return {
						url: edge.node.full_slug,
						date: edge.node.created_at,
						title: edge.node.name,
						img: edge.node.content.thumbnail
          			}
       			})
      		]
    	},
		edges() {
			return this.$page.allStoryblokEntry.edges || [];
		},
	}
}
</script>

<page-query>
query {
	allStoryblokEntry(filter: {tag_list: {contains: "article"}}) {
		edges {
			node {
				id
				name
				created_at(format:"YYYYMMDD")
				full_slug
				content
				tag_list
			}
		}
	}
}
</page-query>

<style lang="scss">
.list {
	margin-top: $xxl;
}
</style>