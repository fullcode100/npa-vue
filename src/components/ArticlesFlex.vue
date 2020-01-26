<template>
	<div class="fit-content">
		<div class="articles__content">
			<h1 class="title--accent">Actualités</h1>
			<div class="articles__flex">
				<div class="articles__big">
					<BigCard
						:url="$page.allStoryblokEntry.edges[2].node.full_slug"
						:title="$page.allStoryblokEntry.edges[2].node.name"
						:summary="$page.allStoryblokEntry.edges[2].node.content.summary"
						:date="date($page.allStoryblokEntry.edges[2].node.created_at)"
						:src="2"
					/>
				</div>
				<div class="articles__little">
					<LittleCard v-for="n in nbPosts" :key="n"
							:url="$page.allStoryblokEntry.edges[n - 1].node.full_slug"
							:title="$page.allStoryblokEntry.edges[n - 1].node.name"
							:date="fromNow($page.allStoryblokEntry.edges[n - 1].node.created_at)"
							:tag="$page.allStoryblokEntry.edges[n - 1].node.tag_list[0]"
							:src="n - 1"
					/>
					<div class="articles__previous">
						<g-link to="/" class="link--inline">Voir les anciens articles 👉</g-link>
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
		nbPosts() {
			return (this.$page.allStoryblokEntry.edges.length < 3 ? this.$page.allStoryblokEntry.edges.length : 3)
		}
	},
	methods: {
		resize(index, option) {
			const imageService = "//img2.storyblok.com/";
			let img = this.$page.allStoryblokEntry.edges[index].node.content.thumbnail;
			const path = img.replace("//a.storyblok.com", "");
			return imageService + option + path;
		},
		fromNow(date) {
			moment.locale("fr");
			return moment(date, "YYYYMMDD").fromNow();
		},
		date(date) {
			let month = date.slice(4, 6);
			let day = date.slice(6, 8);
			return `${day}/${month}`;
		}
	},
}
</script>

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
</style>