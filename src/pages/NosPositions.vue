<template>
	<Layout>
		<section class="section">
			<div class="fit-content">
				<h1 class="subtitle--accent">Nos positions</h1>
				<div class="section__list">
					<MediumCard v-for="(article, key) in cardMap" :key="key"
						:title="article.title"
						:url="article.url"
						:summary="article.summary"
						:date="article.date"
						:img="article.img"
						:tags="article.tags"
					/>
					<div v-if="cardMap.length === 0" class="empty">
						<p>Aucun article à afficher !</p>
					</div>
				</div>
			</div>
		</section>
	</Layout>
</template>

<script>
import MediumCard from "@/components/MediumCard.vue"

export default {
	metaInfo: {
		title: "Nos positions"
	},
	components: {
		MediumCard
	},
	computed: {
		cardMap () {
      		return [
        		...this.edges.map(edge => {
          			return {
						url: edge.node.full_slug,
						date: edge.node.created_at,
						title: edge.node.content.title,
						summary: edge.node.content.summary,
						img: edge.node.content.thumbnail,
						tags: edge.node.tag_list
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
	allStoryblokEntry(filter: { full_slug: {regex: "(^articles/nos-positions\/)"}}, sortBy: "created_at", order: DESC) {
		edges {
			node {
				id
				name
				created_at(format:"YYYYMMDDHHmm")
				full_slug
				content
				tag_list {
					name
				}
			}
		}
	}
}
</page-query>