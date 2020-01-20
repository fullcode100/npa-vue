<template>
	<g-link class="medium-card" :to="url">
		<div class="medium-card__img">
			<g-image :src="src" />
		</div>
		<div class="medium-card__title">
			<h2>{{ title }}</h2>
		</div>
		<div class="medium-card__date">
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
		title: {
            type: String,
            default: "Titre",
		},
		src: {
			type: String,
			default: ""
		},
		date: {
			type: String, 
			default: "01/01"
		}
	}
}
</script>

<style lang="scss">
.medium-card {
	display: flex;
	flex-direction: column;
	position: relative;
	width: 225px;
	transition: 0.3s ease-in-out;

	&__title {
		margin-top: $sm;
		color: $accent;
		transition: 0.3s ease-in-out;

		h2 {
			font-family: "Druk Text";
			font-weight: 900;
			font-size: $font-sm;
		}
	}

	&__img {
		filter: grayscale(100);
		transition: 0.5s ease-in-out;
	}

	&__date {
		position: absolute;
		top: -$xs;
		right: 0;

		> span {
			@include stroke($accent, $primary, 3px, transparent);
			padding: $xxs;
			font-size: $font-sm;
		}
	}

	&:hover {
		.medium-card__title {
			color: $dark;
			transition: 0.3s ease-in-out;
		}

		.medium-card__date span {
			background-color: $dark;
			transition: 0.3s ease-in-out;
		}

		.medium-card__img {
			filter: grayscale(0);
			transition: 0.5s ease-in-out;
		}
	}
}
</style>