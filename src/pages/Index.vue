<template>
	<Layout>
		<section class="home">
			<g-image src="@/assets/hero.jpg" class="home__background" alt="Image d'accueil de NPA Nantes 2020" />
			<div class="home__title fit-content">
				<h1>
					<span>Anticapitalistes et révolutionnaires !</span>
				</h1>
				<h2>
					<span>Nantes aux travailleuses et travailleurs !</span>
				</h2>
			</div>
		</section>
		<section class="topical">
			<div class="fit-content">
				<h2 class="title--dark">Le 15 mars votez et faites voter pour la liste « Anticapitalistes et révolutionnaires ! Nantes aux travailleuses et aux travailleurs »</h2>
				<div class="topical__content">
					<div class="topical__presentation">
						<p>
							Liste du Nouveau Parti Anticapitaliste conduite par <span class="bold">Riwan Chami</span>, assistant d'éducation, et <span class="bold">Sarah Ferron</span>, travailleuse de la culture en recherche d'emploi. </br>

							Liste soutenue par <span class="bold">Olivier Besancenot</span> et <span class="bold">Philippe Poutou</span>. </br>

							Voter, surtout aux <span class="bold">élections municipales</span>, ne mettra pas fin aux salaires en berne, au manque de logements, à la misère des hôpitaux et des écoles, à l'oppression des femmes, au racisme...  </br>

							Voter à ces élections <span class="bold">ne résoudra aucun des problèmes</span> dénoncés par les Gilets jaunes et par les millions de travailleuses et travailleurs qui se mobilisent contre la réforme des retraites. </br>

							<span class="bold">La véritable opposition à Macron ce sont les travailleuses et les travailleurs en lutte</span>, et démocratiquement organisés pour la défense de revendications urgentes et vitales. On n'aura que ce qu'on prendra ! </br>

							Mais voter pour la liste « Anticapitalistes et révolutionnaires ! Nantes aux travailleuses et aux travailleurs » c'est <span class="bold">dire bien fort notre rejet de leur système</span>, de Macron et de son monde ! </br>

							Voter pour cette liste, c'est aussi <span class="bold">envoyer au conseil municipal des élues et des élus qui ne sont pas des professionnels de la politiques</span>, qui <span class="bold">défendront les intérêts des travailleuses et des travailleurs de Nantes</span>, <span class="bold">se feront l'écho des luttes sociales</span> et utiliseront tous les moyens possibles pour <span class="bold">aider à ce que ces luttes gagnent</span>.
						</p>
						<ul class="list">
							<li>
							Interdiction des licenciements et des suppressions de postes
							</li>
							<li>
							Plafonnement des loyers et réquisition des logements vides
							</li>
							<li>
							Contre les violences policières
							</li>
							<li>
							Pas un salaire, pas une pension et pas un minimum social en dessous de 1800 euros nets
							</li>
							<li>
							Augmentation des salaires de 300 euros pour toutes et tous
							</li>
							<li>
							Liberté de circulation et d’installation pour toutes et tous
							</li>
							<li>
							Contre les discriminations et les violences sexistes
							</li>
							<li>
							Prendre sur les profits pour défendre l'écologie
							</li>
						</ul>
						<div class="btn--center">
							<g-link to="/presentation" class="btn--dark">Notre programme</g-link>
						</div>
					</div>
					<div class="topical__img">
						<g-image src="@/assets/affiche_campagne.jpg" alt="Affiche de campagne du NPA pour les municipales à Nantes" width="400px" />
					</div>
				</div>
			</div>
		</section>
		<section class="section">
			<div class="fit-content">
				<h2 class="title--accent">Articles</h2>
				<ArticlesLayout />
			</div>
		</section>
		<section class="section">
			<div class="fit-content">
				<h2 class="title--dark">Événements</h2>
				<div class="section__list">
					<Event v-for="(event, key) in eventMap" :key="key"
						:title="event.title"
						:date="event.date"
						:location="event.location"
						:link="event.link"
						:description="event.description"
					/>
					<div v-if="eventMap.length === 0" class="empty">
						<p>Aucun événement pour le moment !</p>
					</div>
				</div>
				<div class="btn--center">
					<g-link to="/liste-evenements" class="btn--dark">Voir tous les événements</g-link>
				</div>
			</div>
		</section>
	</Layout>
</template>

<script>
import ArticlesLayout from "@/components/ArticlesLayout";
import Event from "@/components/Event";

export default {
	components: {
		ArticlesLayout,
		Event
	},
	computed: {
		eventMap() {
			let edges = this.edges.slice(0, 2);
      		return [
        		...edges.map(edge => {
          			return {
						title: edge.node.content.title,
						date: edge.node.content.date,
						location: edge.node.content.location,
						link: edge.node.content.link.url,
						description: edge.node.content.description
          			}
       			})
      		]
		},
		edges() {
			return this.$page.allStoryblokEntry.edges || [];
		}
	},
	metaInfo: {
		title: "Accueil",
		meta: [
			{
				name: "google-site-verification",
				content: "SssKbETQDtgDpDuRchqc0jKT3dUMNAHprLVhgycLuBw"
			},
			{
				meta: "description",
				content: "Site de campagne du NPA pour les municipales 2020 de Nantes."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: "Accueil"
			},
			{
				property: "og:url",
				content: "https://npa-nantes-2020.org"
			},
			{
				property: "og:description",
				content: "Site de campagne du NPA pour les municipales 2020 de Nantes."
			}
		]
	}
};
</script>


<page-query>
query {
	allStoryblokEntry(filter: { full_slug: {regex: "(^events\/)"} }, sortBy: "created_at", order: DESC) {
		edges {
			node {
				id
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
		margin: 0 auto;
		text-align: center;
		top: 40vh;
		left: 0;
		right: 0;

		h1 {
			font-family: "Druk Wide";
			font-weight: 900;
			font-size: $font-xl;
			text-transform: uppercase;
			line-height: 2;
			display: inline;
			-webkit-box-decoration-break: clone;
			box-decoration-break: clone;
			padding: $xxs;
		}

		h2 {
			font-weight: 800;
    		margin-top: 1.5rem;
			font-size: $font-md;

			span {
				padding: $xxs;
			}
		}

		h1,
		h2 span {
			background-color: $accent;
			color: $primary;
		}
	}
}

.topical {
	padding: $xxl 0 $xl 0;
	color: $dark;
	background-color: $primary-dark;

	&__content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	&__presentation {
		margin-top: $xl;
		font-size: $font-md;

		p, .list {
			margin-top: $md;
		}

		p:first-child {
			margin-top: 0;
		}
	}

	&__img {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: $xxl;
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
	.home {
		&__title {
			h1 {
				font-size: $font-md;
			}

			h2 {
				font-size: $font-sm;
			}
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
		}

		&__quote p {
			font-size: $font-sm;
		}
	}
}

@media screen and (max-width: $tablet) {
	.home {
		&__title {
			h1 {
				line-height: 2.5;
				font-size: $font-sm;
			}
		}
	}
}
</style>