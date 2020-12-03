<template>
	<g-link class="medium-card" :to="url">
		<div class="medium-card__img">
			<StoryblokImage
				:img="img"
				:caption="legend"
				card="mediumCard"
			/>
		</div>
		<div class="medium-card__content">
			<span v-for="tag in tags" :key="tag.name">{{ tag.name }}</span>
			<h3>{{ title }}</h3>
			<p class="medium-card__summary">{{ summary }}</p>
			<div class="medium-card__date">
				<font-awesome :icon="['far', 'clock']" />
				<span>{{ fromNow(date) }}</span>
			</div>
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
		summary: {
			type: String,
			default: "Summary",
		},
		legend: {
			type: String,
			default: "Légende de l'image",
		},
		tags: {
			type: Array,
			default() {
				return []
			}	
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
.medium-card {
	display: flex;
	flex-direction: column;
	color: $dark;

	&__img {
		margin-bottom: $xs;
		
		img {
			width: 100%;
			height: 520px;
			object-fit: cover;
		}
	}

	&__content {
		h3 {
			font-family: "Druk Text Wide", sans-serif;
			font-size: $font-md;
			margin-bottom: $sm;
		}
	}

	&__date {
		color: $dark-light;
		margin-top: $xs;
		
		span {
			margin-left: $xxs;
		}
	}
}
</style>