<template>
	<g-link class="big-card" :to="url">
		<div class="big-card__date">
			<span>{{ date }}</span>
		</div>
		<div class="big-card__img">
			<g-image :src="src" />
		</div>
		<div class="big-card__title">
			<h3>{{ title }}</h3>
		</div>
		<div class="big-card__summary">
			<p>{{ summary }}</p>
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
		},
		summary: {
            type: String,
            default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper, ipsum in luctus ullamcorper, leo metus rutrum ante, non congue tortor elit id risus.",
		},
	}
}
</script>

<style lang="scss">
.big-card {
	display: flex;
	position: relative;
	color: $accent;
	padding-left: $md;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		width: 3px;
		height: 100%;
		background-color: $accent;
		transform: scaleY(1);
		transform-origin: top;
		transition: transform 0.3s ease-in-out;
	}

	&:hover::before {
		transform: scaleY(0.6);
		transform-origin: top;
		transition: transform 0.3s ease-in-out;
	}

	&:focus {
		outline: $accent 3px dashed;
	}

	&__date {
	position: absolute;
	top: $xl;
	left: -$xl;
	transform: rotate(-90deg);

		> span {
			@include stroke($accent, $primary, 3px);
			padding: $xxs;
			font-size: $font-lg;
		}
	}

	&__img {
		filter: grayscale(100);
		overflow: hidden;
		height: 400px;
		width: 100%;

		img {
			width: 100%;
		}
	}

	&__title {
		font-family: "Druk Wide";
		position: absolute;
		bottom: $lg;
		left: $lg;
		width: 75%;
		font-size: $font-lg;

		&::after {
			content: "";
			position: absolute;
			background-color: #EB1C22;
			width: $xxl;
			height: 0.75rem;
			bottom: -1.5rem;
			left: 0;
		}
	}
}
</style>