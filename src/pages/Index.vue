<template>
	<Layout>
		<div class="home fit-content">
			<h1 class="home__title">NOS <span class="title__stroke">VIES</span>, PAS LEURS <span class="title__stroke">PROFITS</span></h1>
			<div class="little-card__container">
			</div>
		</div>
		<div class="topical">
			<div class="fit-content">
				<div class="topical__content">
					<h2 class="topical__title">Nantes 2020</h2>
					<div class="topical__presentation">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Totam illo mollitia animi blanditiis iure asperiores
							voluptatem modi, numquam illum omnis nesciunt placeat?
							Nisi maxime enim deserunt similique harum rerum numquam?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Unde sint aliquam ex dolorem sed molestias vitae, perferendis
							tempora dolorum totam sapiente blanditiis cumque dolore, iure
							natus provident. Quibusdam, dolores maiores?
						</p>
						<div class="btn-container">
							<g-link to="" class="btn--primary">Notre programme</g-link>
						</div>
					</div>
				</div>
				<div class="topical__img">
					<g-image src="@/assets/riwan_chami.jpg" alt="" width="350px" />
				</div>
			</div>
		</div>
		<div class="articles">
			<div class="fit-content">
				<div class="articles__content">
					<h2 class="articles__title">Actualités</h2>
					<div class="articles__grid">
						<BigCard
							:url="$page.allStoryblokEntry.edges[0].node.full_slug"
							:title="$page.allStoryblokEntry.edges[0].node.name"
							:summary="$page.allStoryblokEntry.edges[0].node.content.summary"
							:date="$page.allStoryblokEntry.edges[0].node.created_at"
							:src="resize(0, '525x500')"
						/>
						<div class="articles__aside">
							<LittleCard v-for="n in nbPosts" :key="n"
									:url="$page.allStoryblokEntry.edges[n - 1].node.full_slug"
									:title="$page.allStoryblokEntry.edges[n - 1].node.name"
									:date="$page.allStoryblokEntry.edges[n - 1].node.created_at"
									:src="resize(n - 1, '100x100')"
							/>
						</div>
					</div>
					<div>
						<p style="margin-top:8rem">test</p>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import LittleCard from "@/components/LittleCard.vue";
import MediumCard from "@/components/MediumCard.vue";
import BigCard from "@/components/BigCard.vue";

export default {
	components: {
		LittleCard,
		MediumCard,
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
		}
	},
	metaInfo: {
		title: "Accueil"
	}
};
</script>

<page-query>
query {
	allStoryblokEntry {
		edges {
			node {
				id
				name
				created_at(format:"DD/MM")
				full_slug
				content
			}
		}
	}
}
</page-query>

<style lang="scss">
.home {
	margin-top: $xl;

	&__title {
		font-family: "Druk Wide";
		font-size: $font-xxl;
		font-weight: 900;
		color: $accent;
	}
}

.title__stroke {
	@include stroke($accent, $primary, 4px, transparent);
	padding: $md $xs;
}

.topical {
	color: $primary;
	background-color: $dark;
	margin-top: $xxl;
	padding-bottom: $xxl;

	> div {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: $md;
	}

	&__content {
		padding-top: $xxl;
	}

	&__title {
		position: relative;
		font-family: "Druk Wide";
		font-size: $font-xl;
		font-weight: 700;

		&::after {
			content: "";
			position: absolute;
			background-color: $primary;
			width: 4*$xl;
			height: $xs;
			bottom: -$md;
			left: 0;
		}
	}

	&__presentation {
		margin-top: $xl;

		p {
			font-size: $font-md;
		}

		p + p {
			margin-top: $md;
		}
	}

	&__img {
		padding-top: $xxl;
		justify-self: center;
		align-self: center;
	}
}

.articles {
	&__content {
		padding-top: $xxl;
	}

	&__title {
	position: relative;
	font-family: "Druk Wide";
	font-size: $font-xl;
	font-weight: 700; 

		&::after {
			content: "";
			position: absolute;
			background-color: $accent;
			width: 4*$xl;
			height: $xs;
			bottom: -$md;
			left: 0;
		}
	}

	&__grid {
		display: grid;
		grid-template-columns: 3fr 1fr;
		grid-template-rows: 1fr;
		grid-column-gap: $xl;
		grid-row-gap: 0;
		margin-top: $xxl;
	}
	
	&__aside {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		position: relative;

		&::before {
			content: "";
			position: absolute;
			background-color: $accent;
			width: 2px;
			height: 100%;
			top: 0;
			left: -$lg;
		}
	}
}
</style>