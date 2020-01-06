<template>
	<g-link class="medium-card" :to="url">
		<div class="medium-card__title">
			<h3>{{ title }}</h3>
		</div>
		<div class="medium-card__img">
			<g-image :src="src" />
		</div>
	</g-link>
</template>

<script>
export default {
    props: {
		url: {
        	type: String,
    		default: "/",
        },
		title: {
            type: String,
            default: "Titre",
		},
		src: {
			type: String,
			default: ""
		}
	}
}
</script>

<style lang="scss">
.medium-card {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 200px;

	&__title {
		margin: $md auto $md auto;
		
		color: $accent;

		h3 {
			font-family: "Druk Wide";
			font-weight: 600;
			font-size: $sm + 0.1rem;
		}
	}

	&__img {
		filter: grayscale(100);
	}
}
</style>