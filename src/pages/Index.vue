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
				<h1 class="title--dark">Municipales à Nantes</h1>
				<div class="topical__content">
					<div class="topical__presentation">
						<p>
							Comme toute campagne électorale, les Municipales sont un moment important de débats et de
							discussions politiques et les élections de mars 2020 seront particulièrement marquées par
							les luttes en cours. <span class="bold">Les anticapitalistes ont une voix singulière
							à y faire entendre.</span> 
						</p>
						<ul class="list">
							<li>
								<span class="bold">Une voix qui tranche</span> avec celle des partis qui aspirent à gérer les affaires
								municipales à la place des travailleurs·ses, et habitant·es de la ville.
							</li>
							<li>
								<span class="bold">Une voix qui se fasse l’écho des luttes sociales</span> locales et nationales, et qui exprime
								les besoins réels des habitant·es de Nantes (sur les questions écologiques, d’emploi, de
								logement, de transports, de santé, d’égalité des droits…).
							</li>
							<li>
								<span class="bold">Une voix qui ne transige pas face aux discriminations</span>, à l’intolérance, au racisme, et à
								toutes les politiques qui visent à mettre de côté certaines parties de la population.
							</li>
						</ul>
						<p>
							C’est pourquoi le NPA Nantes envisage de présenter une liste. Nous y parviendrons en mobilisant
							autour de nous, et en nous adressant très largement à l’ensemble des milieux populaires de Nantes.
							Toutes les contributions sont les bienvenues ! <span class="bold">Rejoignez-nous !</span>
						</p>
						<div class="btn--center">
							<g-link to="/presentation" class="btn--dark">Présentation</g-link>
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
		<section class="section">
			<div class="fit-content">
				<h1 class="title--accent">Articles</h1>
				<ArticlesLayout />
			</div>
		</section>
		<section class="section">
			<div class="fit-content">
				<h1 class="title--accent">Événements</h1>
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
				property: "og:type",
				content: "website"
			},
			{
				meta: "description",
				content: "Site de campagne du NPA pour les municipales 2020 de Nantes."
			},
			{
				name: "twitter:card",
				content: "summary",
			},
			{
				property: "og:url",
				content: "https://npa-nantes-2020.org"
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


<page-query>
query {
	allStoryblokEntry(filter: { full_slug: {regex: "(^events\/)"} }, sortBy: "created_at", order: ASC) {
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
			font-size: clamp(16px, 4vw, 52px);
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
			font-size: clamp(16px, 4vw, 32px);

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
			}
		}
	}
}
</style>