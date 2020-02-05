<template>
	<g-link class="little-card" :to="url">
		<div class="little-card__content">
			<span>{{ tag }}</span>
			<h3>{{ title }}</h3>
			<div class="little-card__date">
				<font-awesome :icon="['far', 'clock']" />
				<span>{{ fromNow(date) }}</span>
			</div>
		</div>
		<div class="little-card__img">
			<StoryblokImage
				:img="img"
				:legend="legend"
				card="littleCard"
			/>
		</div>
	</g-link>
</template>

<script>
import StoryblokImage from "@/components/StoryblokImage.vue"
import moment from "moment";

export default {
	components: {
		StoryblokImage
	},
    props: {
		url: {
        	type: String,
    		default: "/",
        },
        date: {
            type: String,
            default: "01/01",
		},
		img: {
			type: String
		},
		title: {
            type: String,
            default: "Titre",
		},
		legend: {
			type: String,
			default: "Légende de l'image",
		},
		tag: {
			type: String,
			default: "Article",
		}
	},
	methods: {
		fromNow(date) {
			moment.locale("fr");
			return moment(date, "YYYYMMDDhhmm").fromNow();
		}
	}
}
</script>

<style lang="scss">
.little-card {
	display: flex;
	position: relative;
	justify-content: space-between;
	max-width: 500px;
	color: $accent;
	margin: $lg auto 0 auto;
	transition: 0.3s ease-in-out;

	&__content {
		display: flex;
		flex-direction: column;

		> span {
			font-size: $font-xs;
			color: $accent-light;
			padding-bottom: $xxs;
			text-transform: uppercase;
			transition: 0.3s ease-in-out;
		}
	
		h3 {
			font-size: $font-sm;
			font-weight: 700;
		}
	}

	&__img {
		filter: grayscale(100);
		margin: auto 0 auto $xxs;
		transition: 0.5s ease-in-out;
	}

	&__date {
		font-weight: 400;
		vertical-align: top;
		color: $dark-light;
		margin-top: $xs;

		span {
			font-size: $font-xs;
			padding-left: $xxs;
			vertical-align: middle;
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