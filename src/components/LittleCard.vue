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
			color: $accent-light;
			padding-bottom: $xxs;
			text-transform: uppercase;
			transition: 0.3s ease-in-out;
		}
	
		h3 {
			font-family: "Druk Text";
			font-size: $font-sm;
			font-weight: 700;
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
		vertical-align: top;
		color: $dark-lighter;
		bottom: -$sm - $xxs;

		span {
			font-size: $font-xs;
			padding-left: $xs;
		}
	}

	&:hover {
		color: $dark;

		.little-card__img {
			filter: grayscale(0);
			transition: 0.5s ease-in-out;
		}

		.little-card__content span {
			color: $dark-light;
		}
	}
}
</style>