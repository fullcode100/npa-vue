<template>
	<div class="articles">
		<div class="articles__big">
			<BigCard
				:title="lastArticle.title"
				:url="lastArticle.url"
				:date="lastArticle.date"
				:img="lastArticle.img"
				:summary="lastArticle.summary"
				:legend="lastArticle.legend"
				:tags="lastArticle.tags"
			/>
		</div>
		<div class="articles__medium">
			<MediumCard class="articles__item" v-for="(article, key) in cardMap" :key="key"
				:title="article.title"
				:summary="article.summary"
				:url="article.url"
				:date="article.date"
				:img="article.img"
				:legend="article.legend"
				:tags="article.tags"
			/>
		</div>
		<div class="btn--center">
			<g-link to="/liste-articles" class="btn--dark">Voir tous les articles</g-link>
		</div>
	</div>
</template>

<script>
import LittleCard from "@/components/LittleCard.vue";
import MediumCard from "@/components/MediumCard.vue";
import BigCard from "@/components/BigCard.vue";
import moment from "moment";

export default {
	components: {
		LittleCard,
		MediumCard,
		BigCard
	},
	computed: {
		cardMap () {
			let edges = this.edges.slice(1, 4);
      		return [
        		...edges.map(edge => {
          			return {
						url: edge.node.full_slug,
						date: edge.node.created_at,
						title: edge.node.content.title,
						summary: edge.node.content.summary,
						img: edge.node.content.thumbnail,
						legend: edge.node.content.caption,
						tags: edge.node.tag_list
          			}
       			})
      		]
		},
		lastArticle() {
			let edge = this.edges[0];
			let data = {};
			if (this.edges.length > 0) {
				console.log(edge.node.tag_list)
				data = {
					url: edge.node.full_slug,
					date: edge.node.created_at,
					title: edge.node.content.title,
					img: edge.node.content.thumbnail,
					summary: edge.node.content.summary,
					legend: edge.node.content.caption,
					tags: edge.node.tag_list
				}
			}

			return data;
		},
		edges() {
			return this.$static.allStoryblokEntry.edges || [];
		}
	}
}
</script>

<static-query>
query {
	allStoryblokEntry(filter: { full_slug: {regex: "(^articles\/)"}}, sortBy: "created_at", order: DESC) {
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
</static-query>

<style lang="scss">
.articles {
	position: relative;
	display: flex;
	flex-direction: column;
	margin-top: $lg;

	&__big {
		position: relative;
		padding-bottom: $md;
		margin-bottom: $md;
		
		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: $dark;
		}
	}

	&__medium {
		width: 100%;
		display: flex;
    	flex-wrap: wrap;
	}

	&__item {
    	width: calc(33% - 0.75rem);
		flex: 0 0 auto;
	}

	&__item + &__item {
		margin-left: $md;
	}
}

@media screen and (max-width: $desktop) {
	.articles {
		&__medium {
			flex-direction: column;
		}

		&__item {
			width: 100%;
			margin-bottom: $lg;

			img {
				width: 100%;
				height: 250px;
			}
		}

		&__item + &__item {
			margin-left: 0;
		}
	}
}
</style>