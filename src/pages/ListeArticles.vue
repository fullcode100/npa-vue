<template>
	<Layout>
		<div class="list fit-content">
			<h1 class="subtitle--accent">Liste des articles</h1>
			<div class="list__content">
				<LittleCard v-for="(article, key) in cardMap" :key="key"
					:title="article.title"
					:url="article.url"
					:date="article.date"
					:img="article.img"
					:tag="article.tag"
				/>
				<div v-if="cardMap.length === 0" class="empty">
					<p>Aucun article à afficher !</p>
				</div>
			</div>
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
						title: edge.node.content.title,
						img: edge.node.content.thumbnail,
						tag: ((edge.node.tag_list).filter(e => e !== "article")).toString()
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
	allStoryblokEntry(filter: {tag_list: {contains: "article"}}, sortBy: "created_at", order: DESC) {
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

	&__content {
		margin-top: $xl;
	}
}
</style>