<template>
	<Layout>
		<div class="home fit-content">
			<h1 class="home__title">NOS <span class="title__stroke">VIES</span>, PAS LEURS <span class="title__stroke">PROFITS</span></h1>
			<div class="little-card__container">		
				<LittleCard v-for="edge in $page.allStoryblokEntry.edges" :key="edge.node.id"
					:url="edge.node.full_slug"
					:title="edge.node.name"
					:date="edge.node.published_at"
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
	</Layout>
</template>

<script>
import LittleCard from "@/components/LittleCard.vue";

export default {
	components: {
		LittleCard
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
				published_at(format:"DD/MM")
				full_slug
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
	@include stroke($accent, $primary, 4px);
	padding: $md $xs;
}

.little-card__container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: $xl;
	grid-row-gap: 0;
	margin-top: $xxl;
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
			width: 50%;
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
</style>