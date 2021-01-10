<template>
	<Layout>
		<section class="home">
			<g-image src="@/assets/hero.jpg" class="home__background" alt="Image d'accueil de NPA Nantes 2020" />
			<div class="home__title fit-content">
				<h1>Nos <span>vies</span>,<br /> pas leurs <span>profits</span></h1>
			</div>
		</section>
		<section class="topical">
			<div class="fit-content">
				<h2 class="title--dark">Municipales à Nantes</h2>
				<div class="topical__content">
					<div class="topical__presentation">
						<div class="topical__left">
							<h3>Faire entendre la voix de celles et ceux qui luttent !</h3>
							<div class="topical__p">
								<p>
									Le 15 mars votez et faites voter pour la liste « Anticapitalistes et révolutionnaires !
									Nantes aux travailleuses et aux travailleurs »
								</p>
								<p>
									Liste du Nouveau Parti Anticapitaliste conduite par <span class="bold">Riwan Chami</span>,
									assistant d'éducation, et <span class="bold">Sarah Ferron</span>, travailleuse de la culture
									en recherche d'emploi.
								</p>
								<p>
									Liste soutenue par <span class="bold">Olivier Besancenot</span> et <span class="bold">Philippe Poutou</span>.
								</p>
								<p>
									Voter, surtout aux <span class="bold">élections municipales</span>, ne mettra pas fin aux salaires en berne,
									au manque de logements, à la misère des hôpitaux et des écoles, à l'oppression des femmes, au racisme...
								</p>
								<p>
									Voter à ces élections <span class="bold">ne résoudra aucun des problèmes</span> dénoncés par les Gilets Jaunes
									et par les millions de travailleuses et travailleurs qui se mobilisent contre la réforme des retraites.
								</p>
							</div>
						</div>
						<div class="topical__right">
							<h3>Anticapitaliste & révolutionnaire</h3>
							<div class="topical__p">
								<p>
									<span class="bold">La véritable opposition à Macron ce sont les travailleuses et les travailleurs en
									lutte</span>, et démocratiquement organisés pour la défense de revendications urgentes et vitales.
									On n'aura que ce qu'on prendra !
								</p>
								<p>
									Mais voter pour la liste « Anticapitalistes et révolutionnaires ! Nantes aux travailleuses et aux
									travailleurs » c'est <span class="bold">dire bien fort notre rejet de leur système</span>, de Macron
									et de son monde !
								</p>
								<p>
									Voter pour cette liste, c'est aussi <span class="bold">envoyer au conseil municipal des élues et des
									élus qui ne sont pas des professionnels de la politiques</span>, qui <span class="bold">défendront
									les intérêts des travailleuses et des travailleurs de Nantes</span>, <span class="bold">se feront
									l'écho des luttes sociales</span> et utiliseront tous les moyens possibles pour <span class="bold">aider
									à ce que ces luttes gagnent</span>.
								</p>
								<p>
									Voter pour la liste « Anticapitalistes et révolutionnaires ! Nantes aux travailleuses et aux
									travailleurs » c'est <span class="bold">défendre un programme pour les luttes sociales !</span>
								</p>
							</div>
						</div>
					</div>
					<div class="btn--center">
						<g-link to="/presentation" class="btn--dark">Notre programme détaillé</g-link>
					</div>
					<div class="topical__img">
						<g-image src="@/assets/affiche-electorale-generale.jpg" alt="Affiche éléctorale du NPA : « Anticapitaliste et révolutionnaire »" width="450" />
						<g-image src="@/assets/affiche-electorale-migrants.jpg" alt="Affiche éléctorale du NPA : « Migrants »" width="450" />
						<g-image src="@/assets/affiche-electorale-riposte.jpg" alt="Affiche éléctorale du NPA : « Riposte »" width="450" />
					</div>
					<div class="btn--center" style="text-align:center;flex-direction:column">
						<a class="link--dark" href="https://a.storyblok.com/f/74141/x/5208df6e79/npa-nantes-2020-profession-foi-small.pdf" download="Profession de foi">
							Télécharger la profession de foi
						</a>
						<a class="link--dark" href="https://a.storyblok.com/f/74141/x/b4c1e94662/npa-nantes-2020-bulletin-vote.pdf" download="Bulletin de vote">
							Télécharger le bulletin de vote
						</a>
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
				<div class="event__list">
					<div class="event__cell" v-for="(event, key) in eventMap" :key="key">
						<Event
							:title="event.title"
							:date="event.date"
							:location="event.location"
							:link="event.link"
							:description="event.description"
						/>
					</div>
					<div v-if="eventMap.length === 0" class="empty">
						<p>Aucun événement pour le moment !</p>
					</div>
				</div>
				<div class="btn--center">
					<g-link to="/liste-evenements" class="btn--dark">Tous les événements</g-link>
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
			let edges = this.edges.slice(0, 4);
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
		transform: translate(-50%, -50%);
		left: 50%;
		top: 50%;

		h1 {
			display: inline;
			-webkit-box-decoration-break: clone;
			box-decoration-break: clone;
			padding: $xxs $xxs 0 $xxs;
			background-color: $accent;
			line-height: 1.6;
			color: $primary;
			font-family: "Monument Extended";
			font-weight: 900;
			font-size: calc(32px + (72 - 32) * ((100vw - 300px) / (1600 - 300)));
			text-transform: uppercase;

		
			span {
				color: transparent;
				-webkit-text-stroke: 1.5px $primary;
			}
		}
	}
}

.topical {
	padding: $xxl 0;
	color: $dark;
	background-color: $primary-dark;
	
	&__content {
		margin-top: $lg;
	}

	&__presentation {
		display: grid;
    	grid-template-columns: 1fr 1fr;
		gap: $lg;

		h3 {
			font-family: "Monument Extended", sans-serif;
			font-size: $font-md;
			font-weight: 400;
			color: $accent;
		}
	}

	&__p {
		margin-top: $md;

		p + p {
			margin-top: $xs;
		}
	}

	&__img {
		margin-top: $xl;
		display: grid;
		grid-template-columns: repeat(3, auto);
		gap: $md;
		overflow-x: scroll;
	}
}

.event {
	&__list {	
		margin-top: $md;
		display: grid;
    	grid-template-columns: 1fr 1fr;
		gap: $lg $xxl;
	}

	&__cell {
		display: flex;
		justify-content: center;
		position: relative;
		
		&::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
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

@media screen and (max-width: $desktop) {
	.event {
		&__list {
			grid-template-columns: repeat(1, auto);
			gap: $sm;
		}
	}
}

@media screen and (max-width: $mobile) {
	.topical__presentation {
		grid-template-columns: repeat(1, auto);
	}
}
</style>