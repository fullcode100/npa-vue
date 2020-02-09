<template>
	<Layout>
		<section class="home">
			<g-image src="@/assets/hero.jpg" class="home__background" alt="Image d'accueil de NPA Nantes 2020" />
			<div class="home__title fit-content">
				<h1>
					<span class="title__block">Anticapitalistes</span> et
					<br />
					<span class="title__block">révolutionnaires !</span>
				</h1>
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
							électorales. Découvrez nos activités, venez participer à nos événements,
							écouter notre démarcher !
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
			<EventsFlex />
		</section>
	</Layout>
</template>

<script>
import ArticlesFlex from "@/components/ArticlesFlex";
import EventsFlex from "@/components/EventsFlex";

export default {
	components: {
		ArticlesFlex,
		EventsFlex
	},
	metaInfo: {
		title: "Accueil",
		meta: [
			{
				name: "google-site-verification",
				content: "SssKbETQDtgDpDuRchqc0jKT3dUMNAHprLVhgycLuBw"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:description",
				content: "Site de campagne du NPA pour les municipales 2020 de Nantes."
			},
			{
				property: "og:title",
				content: "Accueil"
			}
		]
	}
};
</script>

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
		margin: 0 auto;
		text-align: center;
		top: 40%;
		left: 0;
		right: 0;

		h1 {
			font-family: "Druk Wide";
			font-weight: 900;
  			font-size: calc(14px + (48 - 14) * ((100vw - 300px) / (1600 - 300)));
			text-transform: uppercase;
		}
	}

	&__banner {
		position: absolute;
		bottom: 0;
		width: 100%;
		background-color: $accent;
		font-weight: 500;
		color: $primary;
		padding: $xs 0;

		> div {
			text-align: center;
		}
	}

	.title__block {
		background-color: $accent;
		color: $primary;
		padding: $xxs;
		line-height: 2;
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

.empty {
	margin-top: $xl;

	p {
		text-align: center;
		color: $dark-light;
		font-size: $font-md;
	}
}

@media screen and (max-width: $desktop){
	.title__block {
		line-height: 2.5;
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

			p {
				font-size: $font-sm;
			}
		}

		&__quote p {
			font-size: $font-sm;
		}
	}
}
</style>