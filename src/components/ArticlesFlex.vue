<template>
	<div class="fit-content">
		<div class="articles__content">
			<h1 class="title--accent">Actualités</h1>
			<div class="articles__flex">
				<div class="articles__big">
					<BigCard
						:title="lastArticle.title"
						:url="lastArticle.url"
						:date="lastArticle.date"
						:img="lastArticle.img"
						:summary="lastArticle.summary"
					/>
				</div>
				<div class="articles__little">
					<LittleCard v-for="(article, key) in cardMap" :key="key"
						:title="article.title"
						:url="article.url"
						:date="article.date"
						:img="article.img"
					/>
					<div class="articles__previous">
						<g-link to="/liste-articles" class="link--inline">Voir les anciens articles 👉</g-link>
					</div>
				</div>
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
						title: edge.node.name,
						img: edge.node.content.thumbnail
          			}
       			})
      		]
		},
		lastArticle() {
			let edge = this.edges[0];
			return {
				url: edge.node.full_slug,
				date: edge.node.created_at,
				title: edge.node.name,
				img: edge.node.content.thumbnail,
				summary: edge.node.content.summary
			}
		},
		edges() {
			return this.$static.allStoryblokEntry.edges || [];
		}
	}
}
</script>

<static-query>
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
</static-query>

<style lang="scss">
.articles {
	margin-top: $xxl;

	&__flex {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: $xl;
	}

	&__big {
		width: 70%;
	}

	&__little {
		display: flex;
		justify-content: space-between;
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