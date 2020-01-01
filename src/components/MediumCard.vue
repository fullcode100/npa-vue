<template>
	<g-link class="medium-card" :to="url">
		<div class="medium-card__date">
			<span>{{ date }}</span>
		</div>
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
        date: {
            type: String,
            default: "01/01",
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
	position: relative;
	z-index: 1;
	color: $accent;
	padding-left: $xs;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		width: 3px;
		height: 100%;
		background-color: $accent;
		transform: scaleY(0.6);
		transform-origin: top;
		transition: transform 0.3s ease-in-out;
	}

	&:hover::before {
		transform: scaleY(1);
		transform-origin: top;
		transition: transform 0.3s ease-in-out;
	}

	&:focus {
		outline: $accent 3px dashed;
	}
	
	&__date {
		position: absolute;
		top: $sm/3;
		left: -($lg + $xxs);

		> span {
			padding: $xxs;
			font-size: $font-md;
		}
	}

	&__title h3 {
		font-size: $font-lg;
		padding: $md 0 $xxs 0;
	}

	&__img {
		position: absolute;
		z-index: -1;
		filter: grayscale(100);
		overflow: hidden;
		top: $lg;
		left: $md;
	}
}
</style>