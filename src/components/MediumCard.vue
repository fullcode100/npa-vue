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

	&::after {
		content: "";
		position: absolute;
		background-color: $accent;
		width: 60%;
		height: 1.5px;
		top: -$xxs;
		left: 0;
		transition: 0.3s ease-in-out;
	}

	&__title {
		margin-top: $sm;
		color: $accent;
		transition: 0.3s ease-in-out;

		h2 {
			font-family: "Druk Wide Text";
			font-weight: 500;
			font-size: $sm;
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
			font-size: $font-md/1.2;
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

		&::after {
			transform: scale(0.8);
			background-color: $dark;
			transform-origin: right;
			transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
		}
	}
}
</style>