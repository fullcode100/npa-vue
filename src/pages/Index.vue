<template>
	<Layout>
		<div class="home fit-content">
			<h1 class="home__title">NOS <span class="title__stroke">VIES</span>, PAS LEURS <span class="title__stroke">PROFITS</span></h1>
			<div class="home__articles">
				<LittleCard v-for="n in nbPosts" :key="n"
					:url="$page.allStoryblokEntry.edges[n - 1].node.full_slug"
					:title="$page.allStoryblokEntry.edges[n - 1].node.name"
					:date="fromNow($page.allStoryblokEntry.edges[n - 1].node.created_at)"
					:tag="$page.allStoryblokEntry.edges[n - 1].node.tag_list[0]"
					:src="resize(n - 1, '100x100')"
				/>
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
							:date="date($page.allStoryblokEntry.edges[0].node.created_at)"
							:src="resize(0, '500x500')"
						/>
						<div class="articles__little">
							<LittleCard v-for="n in nbPosts" :key="n"
									:url="$page.allStoryblokEntry.edges[n - 1].node.full_slug"
									:title="$page.allStoryblokEntry.edges[n - 1].node.name"
									:date="fromNow($page.allStoryblokEntry.edges[n - 1].node.created_at)"
									:tag="$page.allStoryblokEntry.edges[n - 1].node.tag_list[0]"
									:src="resize(n - 1, '100x100')"
							/>
						</div>
						<div class="articles__medium">
							<MediumCard v-for="n in nbPosts" :key="n"
								:title="$page.allStoryblokEntry.edges[n - 1].node.name"
								:src="resize(n - 1, '200x125')"
							/>
						</div>	
						<div class="articles__share">
							<p>Suivez-nous sur les <span>réseaux sociaux !</span></p>
							<div>
								<font-awesome :icon="['fab', 'twitter']" size="2x" />
								<font-awesome :icon="['fab', 'facebook']" size="2x" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="events">
			<div class="fit-content">
				<h2 class="events__title">Évènements</h2>
			</div>
		</div>
	</Layout>
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
.home {
	margin-top: $xl;

	&__title {
		font-family: "Druk Wide";
		font-size: $font-xxl;
		font-weight: 900;
		color: $accent;
	}

	&__articles {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: $xxl;
		margin-top: 3*$lg;
	}
}

.title__stroke {
	@include stroke($accent, $primary, 4px, transparent);
	padding: $md $xs;
}

.topical {
	color: $primary;
	background-color: $dark;
	margin-top: $xl;
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
		@include title($primary);
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
		@include title($accent);
	}

	&__grid {
		display: grid;
		position: relative;
		grid-template-columns: 2.5fr 1fr;
		grid-template-rows: 1fr 0.25fr;
		grid-column-gap: $xl;
		grid-row-gap: $lg;
		margin-top: $xxl;
	}

	&__medium {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	&__little {
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

	&__share {
		background-color: $dark;
		color: $primary;
		padding: $lg $md;
		
		p {
			text-align: center;
			font-size: $font-md;
		}

		span {
			font-weight: 900;
		}

		div {
			display: flex;
			justify-content: space-evenly;
			margin-top: $lg;
		}

		svg:hover {
			color: darkblue;
		}
	}
}

.events {
	margin-top: $xxl;

	&__title {
		@include title($accent);
	}
}
</style>