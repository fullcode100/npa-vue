<template>
	<Layout>
		<section class="home">
			<g-image src="@/assets/hero.jpg" class="home__background" />
			<div class="fit-content">
				<h1 class="home__title"><span class="title__block">NPA NANTES</span> <span class="title__stroke">2020</span></h1>
			</div>
			<div class="home__banner">
				<div class="fit-content">
					<p>Une liste anticapitaliste et révolutionnaire pour Nantes ! ✊
					<g-link to="/#topical" class="link--primary">Découvrir nos propositions</g-link>
					</p>
				</div>
			</div>
		</section>
		<section class="articles">
			<a id="articles"></a>
			<div class="fit-content">
				<div class="articles__content">
					<h1 class="articles__title">Actualités</h1>
					<div class="articles__grid">
						<BigCard
							:url="$page.allStoryblokEntry.edges[0].node.full_slug"
							:title="$page.allStoryblokEntry.edges[0].node.name"
							:summary="$page.allStoryblokEntry.edges[0].node.content.summary"
							:date="date($page.allStoryblokEntry.edges[0].node.created_at)"
							:src="resize(0, '500x500')"
						/>
						<div class="articles__little">
							<span>Derniers articles</span>
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
								:url="$page.allStoryblokEntry.edges[n - 1].node.full_slug"
								:title="$page.allStoryblokEntry.edges[n - 1].node.name"
								:src="resize(n - 1, '225x150')"
								:date="date($page.allStoryblokEntry.edges[n - 1].node.created_at)"
							/>
						</div>	
						<div class="articles__share">
							<div class="articles__network">
								<p>Suivez-nous sur les <span>réseaux sociaux !</span></p>
								<div>
									<font-awesome :icon="['fab', 'twitter']" size="2x" />
									<font-awesome :icon="['fab', 'facebook-f']" size="2x" />
								</div>
							</div>
							<div class="articles__past">
								<g-link to="" class="btn--primary">Précédents articles</g-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="topical">
			<a id="topical"></a>
			<div class="fit-content">
				<div class="topical__content">
					<h1 class="topical__title">Nantes 2020</h1>
					<div class="topical__presentation">
						<p>
							Les partis institutionnels, de droite et de gauche, gèrent la politique dans ce pays, loin des intérêts du
							plus grand nombre. Il en est de même dans les mairies. Les militantEs et sympathisantEs du NPA ne sont pas
							des professionnels de la politique : ils et elles sont salariéEs ou au chômage.  Tous les jours, et pas
							seulement pendant les élections, nous luttons avec nos collègues, voisins contre la misère et cette société
							violente et injuste. 
						</p>
						<p>
							Nous sommes anticapitalistes : Nous dénonçons les injustices sociales, écologiques, les discriminations qui
							sont portées par la loi de l’argent.... mais pas seulement! Car nous sommes révolutionnaires.
							Nous pensons qu’il faut en finir avec ce système d’exploitation par la lutte. Les solutions que nous
							proposons sont à construire avec les travailleurs, travailleuses, avec les habitantEs de cette ville. Ce ne
							sont pas des promesses électorales. Venez voir notre site, écouter notre démarche. Et si on prenait enfin
							nos affaires en main ?”
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
		</section>
		<section class="events">
			<a id="events"></a>
			<div class="fit-content">
				<h1 class="events__title">Évènements</h1>
			</div>
		</section>
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
		},
		windowSize() {
			return `${window.innerWidth}px`
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
	position: relative;

	&__background {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}

	&__title {
		position: absolute;
		top: $xxl*2;
		font-family: "Druk Wide";
		font-weight: 900;
		font-size: $font-xxl;
		width: 25%;
	}

	&__banner {
		position: absolute;
		bottom: 0;
		width: 100%;
		background-color: $accent;
		color: $primary;
		padding: $xs 0;

		> div {
			text-align: center;
		}
	}

	.title__block {
		background-color: $accent;
		color: $primary;
	}

	.title__stroke {
		@include stroke(transparent, transparent, 4px, $accent);
		padding: $md $xs;
	}
}

.articles {
	margin-top: $xxl;

	&__title {
		@include title($accent);
	}

	&__grid {
		display: grid;
		position: relative;
		grid-template-columns: 2.5fr 1fr;
		grid-template-rows: 1fr 0.25fr;
		grid-column-gap: $xl;
		grid-row-gap: $xl;
		margin-top: $xl;
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

		> span {
			font-family: "Druk Text Wide";
		}

		&::after {
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
		height: 250px;
	}

	&__network {
		display: flex;
		flex-direction: column;

		> div {
			display: flex;
			justify-content: space-evenly;
			margin-top: $xs;
		}

		p {
			text-align: center;
			font-size: $font-md;
		}

		span {
			font-weight: 900;
		}
	}

	&__past {
		display: flex;
		justify-content: center;
		margin-top: $lg;
	}
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

.events {
	margin-top: $xxl;

	&__title {
		@include title($accent);
	}
}
</style>