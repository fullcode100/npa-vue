<template>
	<g-link class="little-card" :to="url">
		<div class="little-card__header">
			<span class="date">{{ date }}</span>
			<span class="tag">{{ tag }}</span>
		</div>
		<div class="little-card__title">
			<h3>{{ title }}</h3>
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

	&__header {
		position: absolute;
		font-size: $font-sm;
		top: -$md;
		left: 0;
		color: $accent-light;
		transition: 0.3s ease-in-out;

		.date {
			font-weight: 600;
			margin-right: $xxs;
		}

		.tag {
			text-transform: uppercase;
		}
	}

	&__title {
		display: flex;
    	align-items: center;
	
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

		.little-card__header {
			color: $dark-light;
			transition: 0.3s ease-in-out;
		}
	}
}
</style>