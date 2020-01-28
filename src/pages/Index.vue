<template>
	<Layout>
		<section class="home">
			<g-image src="@/assets/hero.jpg" class="home__background" alt="Image d'accueil de NPA Nantes 2020" />
			<div class="fit-content">
				<h1 class="home__title"><span class="title__block"></span> <span class="title__stroke"></span></h1>
			</div>
			<div class="home__banner">
				<div class="fit-content">
					<p>Une liste anticapitaliste et révolutionnaire pour Nantes ! ✊
					<g-link to="/#topical" class="link--inline">Découvrir nos propositions</g-link>
					</p>
				</div>
			</div>
		</section>
		<a id="articles"></a>
		<section class="articles">
			<ArticlesFlex />
		</section>
		<a id="topical"></a>
		<section class="topical">
			<div class="fit-content">
				<h1 class="title--dark">Nantes 2020</h1>
				<div class="topical__content">
					<div class="topical__presentation">
						<p>
							Les partis institutionnels, de droite et de gauche, gèrent la politique dans ce pays
							loin des intérêts du plus grand nombre. Il en est de même dans les mairies. Les militant·es et
							sympathisant·es du <span class="bold">NPA ne sont pas des professionnels de la politique</span> : ils
							et elles sont salarié·es ou au chômage. Tous les jours, et pas seulement pendant les élections,
							nous luttons avec nos collègues, voisins <span class="bold">contre la misère et cette société
							violente et injuste</span>. 
						</p>
						<p>
							Nous sommes <span class="bold">anticapitalistes</span> : Nous dénonçons les injustices sociales,
							écologiques, les discriminations qui sont portées par la loi de l’argent… mais pas seulement !
							Car nous sommes <span class="bold">révolutionnaires</span>. Nous pensons qu’il faut en finir avec
							ce système d’exploitation par la lutte. Les solutions que nous proposons sont à construire avec les
							travailleurs, travailleuses, avec les habitant·es de cette ville. Ce ne sont pas des promesses
							électorales. Venez voir notre site, écouter notre démarche. 
						</p>
						<p>	
							<span class="bold">Et si on prenait enfin nos affaires en main ?</span>
						</p>
						<div class="topical__btn">
							<g-link to="/municipales-nantes" class="btn--dark">Nos propositions</g-link>
						</div>
					</div>
					<div class="topical__img">
						<g-image src="@/assets/riwan_chami.jpg" alt="Riwan Chami" width="400px" />
						<div class="topical__quote">
							<p>« La décision est prise de présenter une liste indépendante »</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<a id="events"></a>
		<section class="events">
			<div class="fit-content">
				<h1 class="title--accent">Évènements</h1>
			</div>
		</section>
	</Layout>
</template>

<script>
import ArticlesFlex from "@/components/ArticlesFlex";

export default {
	components: {
		ArticlesFlex
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
	width: 100%;

	&__background {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}

	&__title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: "Druk Wide";
		font-weight: 900;
		font-size: $font-xxl;
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

.topical {
	color: $dark;
	background-color: $primary-dark;
	margin-top: $xl;
	padding: $xxl 0;

	&__content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	&__btn {
		display: flex;
		justify-content: center;
		margin-top: $lg;
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: $xxl;
	}

	&__quote {
		color: $primary-dark;

		p {
			display: inline;
			-webkit-box-decoration-break: clone;
			box-decoration-break: clone;
			padding: $xxs;
			font-size: $font-md;
			line-height: 2.5;
			font-weight: 800;
			background-color: $dark;
		}
	}
}

.events {
	margin-top: $xxl;
}

@media screen and (max-width: $desktop){
	.home {
		&__title {
			font-size: $font-xl;
		}
	}

	.topical {
		&__content {
			flex-direction: column-reverse;
		}

		&__img {
			margin-left: 0;
			margin-top: $xl;

			> img {
				width: 75%;
				margin: auto;
			}
		}

		&__presentation {
			margin-top: $lg;
			font-size: $font-sm;
		}
	}
}
</style>