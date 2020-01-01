<template>
	<g-link class="little-card" :to="url">
		<div class="little-card__title">
			<h3>{{ title }}</h3>
		</div>
		<div class="little-card__date">
			<span>{{ date }}</span>
		</div>
		<div class="little-card__img">
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
        date: {
            type: String,
            default: "01/01",
		},
		src: {
			type: String,
			default: ""
		},
		title: {
            type: String,
            default: "Titre",
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
	
	&__title h3 {
		font-size: $md;
		font-weight: 500;
	}

	&__date {
	position: absolute;
	bottom: -$xs;
	left: 0;
	z-index: 999;

		> span {
			@include stroke($accent, $primary, 3px, transparent);
			font-size: $font-sm;
			padding: $xxs;
			transition: 0.3s ease-in-out;
		}
	}

	&__img {
		filter: grayscale(100);
		transition: 0.5s ease-in-out;
	}

	&:hover {
		color: $dark;
		transition: 0.3s ease-in-out;

		.little-card__date span {
			background-color: $dark;
			transition: 0.3s ease-in-out;
		}

		.little-card__img {
			filter: grayscale(0);
			transition: 0.5s ease-in-out;
		}
	}
}
</style>