<template>
	<g-link class="little-card" :to="url">
		<div class="little-card__content">
			<span>{{ tag }}</span>
			<h3>{{ title }}</h3>
		</div>
		<div class="little-card__img">
			<g-image :src="src" />
		</div>
		<div class="little-card__date">
			<font-awesome :icon="['far', 'clock']" />
			<span>{{ date }}</span>
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
        date: {
            type: String,
            default: "01/01",
		},
		src: {
			type: String,
			default: "",
		},
		title: {
            type: String,
            default: "Titre",
        },
		tag: {
			type: String,
			default: "NPA",
		}
	}
}
</script>

<style lang="scss">
.little-card {
	display: flex;
	position: relative;
	color: $accent;
	margin: $lg auto $lg auto;
	transition: 0.3s ease-in-out;

	&__content {
		display: flex;
		flex-direction: column;

		span {
			font-weight: 100;
			padding-bottom: $xxs;
			text-transform: uppercase;
		}
	
		h3 {
			font-family: "Druk Wide";
			font-size: $sm + 0.1rem;
			font-weight: 400;
		}
	}

	&__img {
		filter: grayscale(100);
		margin: auto 0 auto $xs;
		transition: 0.5s ease-in-out;
	}

	&__date {
		position: absolute;
		font-weight: 400;
		color: $dark-lighter;
		bottom: -$sm;

		span {
			padding-left: $xs;
		}
	}

	&:hover {
		color: $dark;

		.little-card__img {
			filter: grayscale(0);
		}
	}
}
</style>