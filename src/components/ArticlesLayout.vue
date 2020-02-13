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
				:tag="lastArticle.tag"
			/>
		</div>
		<div class="articles__little">
			<LittleCard v-for="(article, key) in cardMap" :key="key"
				:title="article.title"
				:url="article.url"
				:date="article.date"
				:img="article.img"
				:legend="article.legend"
				:tag="article.tag"
			/>
			<div v-if="cardMap.length === 0" class="empty">
				<p>Pas d'autre articles à afficher !</p>
			</div>
			<div class="btn--center">
				<g-link to="/liste-articles" class="link--inline">Voir les anciens articles 👉</g-link>
			</div>
		</div>
	</div>
</template>

<script>
import LittleCard from "@/components/LittleCard.vue";
import BigCard from "@/components/BigCard.vue";
import moment from "moment";

export default {
	components: {
		LittleCard,
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
						img: edge.node.content.thumbnail,
						legend: edge.node.content.caption,
						tag: ((edge.node.tag_list).filter(e => e !== "article")).toString()
          			}
       			})
      		]
		},
		lastArticle() {
			let edge = this.edges[0];
			let data = {};
			if (this.edges.length > 0) {
				data = {
					url: edge.node.full_slug,
					date: edge.node.created_at,
					title: edge.node.content.title,
					img: edge.node.content.thumbnail,
					summary: edge.node.content.summary,
					legend: edge.node.content.caption,
					tag: ((edge.node.tag_list).filter(e => e !== "article")).toString()
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
	allStoryblokEntry(filter: {tag_list: {contains: "article"}}, sortBy: "created_at", order: DESC) {
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
</static-query>

<style lang="scss">
.articles {
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: $xl;

	&__big {
		width: 70%;
	}

	&__little {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		position: relative;
		width: 30%;
		margin-left: $xl;

		&::after {
			content: "";
			position: absolute;
			background-color: $accent;
			width: 2px;
			height: 100%;
			top: 0;
			left: -$lg;
		}

		&::before {
			content: "Derniers articles";
			font-family: "Druk Wide";
			position: absolute;
			top: 0;
			left: 0;
		}
	}

	&__previous {
		display: flex;
		margin: 0 auto;
		padding: $md 0 $xs 0;
	}
}

@media screen and (max-width: $desktop-L) {
	.articles {
		&__flex {
			flex-direction: column;
		}

		&__big {
			width: 100%;
		}

		&__little {
			margin-top: $xl;
			margin-left: 0;
			width: 100%;

			.little-card {
				width: 50%;
				margin-right: auto;
				margin-left: auto;

				&:first-of-type {
					margin-top: $xl;
				}
			}

			&::after {
				height: 2px;
				width: 100%;
				left: 0;
				top: $md;
			}
		}
	}
}

@media screen and (max-width: $desktop) {
	.articles {
		&__little {
			.little-card {
				width: 70%;
			}
		}
	}
}

@media screen and (max-width: $tablet) {
	.articles {
		&__little {
			.little-card {
				width: 100%;
			}
		}
	}
}
</style>