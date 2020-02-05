<template>
	<Layout>
		<main class="article">
			<div class="article__header">
				<div class="fit-article">
					<h1 class="article__title">Municipales à Nantes : une liste anticapitaliste et révolutionnaire</h1>
					<p class="article__summary">
							Les jeunes pour le climat, les étudiants contre la précarité, les femmes
							contre les violences, les migrants et de leurs soutiens pour leurs droits,
							les Gilets jaunes et les travailleur·euses pour les emplois, les salaires
							et les retraites : tous manifestent leur désir de changement et bousculent
							la vie politique, à Nantes comme dans le reste du pays.
					</p>
				</div>
			</div>
			<div class="fit-article article__content">
				<p>
					Comme toute campagne électorale, les Municipales sont un moment important
					de débats et de discussions politiques et les élections de mars 2020 seront
					particulièrement marquées par les luttes en cours. Les anticapitalistes ont
					une voix singulière à y faire entendre.
				</p>
				<p>
					<ul>
						<li>
							Une voix qui tranche avec celle des partis qui aspirent à gérer les affaires
							municipales à la place des travailleur·euses, des habitant·es de la ville.
						</li>
						<li>
							Une voix qui se fasse l’écho des luttes sociales locales et nationales, et qui
							exprime les besoins réels des habitant·es de Nantes (sur les questions écologiques,
							d’emploi, de logement, de transports, de santé, d’égalité des droits…).
						</li>
						<li>
							Une voix qui ne transige pas face aux discriminations, à l’intolérance, au racisme,
							et à toutes les politiques qui visent à mettre de côté certaines parties de la population. 
						</li>
					</ul>
				</p>	
				<p>
					C’est pourquoi le comité NPA Rosa Luxemburg envisage de présenter une liste. Nous y parviendrons
					en mobilisant autour de nous, et en nous adressant très largement à l’ensemble des milieux
					populaires de Nantes. Toutes les contributions sont les bienvenues ! <span class="bold">Rejoignez-nous !</span>
				</p>	
			</div>
		</main>
	</Layout>
</template>

<script>
export default {
	name: "Municipales Nantes",
	metaInfo: {
		title: "Municipales Nantes"
	}
}
</script>

<style lang="scss">
.article {
	color: $dark;

	&__title {
		font-family: "Druk Text Wide";
		font-weight: 700;
		letter-spacing: -0.5px;
		font-size: $font-lg;
	}

	&__header {
		padding: $xxl 0 $xl 0;
		background-color: $primary-dark;
	}

	&__date {
		margin-top: $md;
		color: $dark-light;
	}

	&__summary {
		margin-top: $sm;
		font-size: $font-md;
	}

	&__img {
		margin-top: $xl;
		display: flex;
		align-items: center;
		flex-direction: column;

		img {
			object-fit: cover;
			max-width: 75%;
		}

		p {
			color: $dark-light;
			margin-top: $xs;
		}
	}

	&__content {
		margin-top: $lg;

		ul {
			list-style: square inside;
		}

		li {
			margin-top: $sm;
		}

		p + p {
			margin-top: $md;
		}

		h1,
		h2,
		h3,
		h4 {
			margin: $md 0 $sm 0;
			font-size: $font-md;
			font-family: "Druk Text Wide";
		}

		a {
			@include link(rgba($dark, 0.7), rgba($dark, 0.4), $dark);
		}
	}
}

@media screen and (max-width: $tablet) {
	.article {
		&__title {
			font-size: $font-md;
		}

		&__summary {
			font-size: $font-sm;
		}
	}
}
</style>