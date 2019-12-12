<template>
	<Layout>
		<h1 class="home__title">NOS <span class="title__stroke">VIES</span>, PAS LEURS <span class="title__stroke">PROFITS</span></h1>
		<div class="little-card__container">		
			<LittleCard 
				title="Comment sortir du capitalisme ?"
				date="21/02"
			/>
			<LittleCard
				title="Grève générale : faisons-les battre en retraite !"
				date="12/01"
			/>
			<LittleCard
				title="Ne pas leur demander, exiger !"
				date="25/12"
			/> 
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

<style lang="scss">
.home__title {
	font-family: "Druk Wide";
	font-size: $font-xxl;
	font-weight: 900;
	color: $accent;
	margin-top: $xl;
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
</style>