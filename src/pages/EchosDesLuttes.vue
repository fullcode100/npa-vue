<template>
	<Layout>
		<section class="section">
			<div class="fit-content">
				<h1 class="subtitle--accent">Échos des luttes</h1>
				<div class="section__list">
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
		</section>
	</Layout>
</template>

<script>
import LittleCard from "@/components/LittleCard.vue"

export default {
	metaInfo: {
		title: "Échos des luttes"
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
						tag: edge.node.tag_list.toString()
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
	allStoryblokEntry(filter: { full_slug: {regex: "(^articles/echos-des-luttes\/)"}}, sortBy: "created_at", order: DESC) {
		edges {
			node {
				id
				name
				created_at(format:"YYYYMMDDHHmm")
				full_slug
				content
				tag_list
			}
		}
	}
}
</page-query>