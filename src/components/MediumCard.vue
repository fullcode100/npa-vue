<template>
	<g-link class="medium-card" :to="url">
		<div class="medium-card__img">
			<StoryblokImage
				:img="img.path"
				:caption="legend"
			/>
		</div>
		<div class="medium-card__title">
			<span class="medium-card__tags" v-for="tag in tags" :key="tag.name">{{ tag.name }}</span>
			<h3>{{ title }}</h3>
			<div class="medium-card__date">
				<font-awesome :icon="['far', 'clock']" />
				<span>{{ fromNow(date) }}</span>
			</div>
		</div>
		<div class="medium-card__summary">
			<p>{{ summary }}</p>
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
			type: Object
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
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: $md;
	color: $dark;
	position: relative;

	&:hover {
		h3 {
			text-decoration: underline;
		}
	}
	
	&::after {
		position: absolute;
		content: "";
		background-color: $dark;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
	}

	&::before {
		position: absolute;
		content: "";
		background-color: $dark;
		top: 0;
		left: 0;
		width: 100%;
		height: 2px;
	}

	h3 {
		margin-top: $xs;
		font-family: "Monument Extended", sans-serif;
		font-size: $font-md;
		font-weight: 400;
		color: $accent;
	}

	&__date {
		margin-top: $sm;
		color: $dark-light;

		span {
			margin-left: $xxs;
		}
	}

	&__title, &__summary {
		margin: $sm 0;
	}

	&__summary {
		color: $dark-light;
		font-size: 1.125rem;
	}

	&__tags {
		font-family: "Monument Extended", sans-serif;
		font-weight: 300;
		color: $accent-light;
	}

	&__tags + &__tags {
		margin-left: $xs;
	}

	&__img {
		display: flex;
		align-items: center;

		img {
			width: 100%;
			height: 300px;
			object-fit: cover;
		}
	}
}

@media screen and (max-width: $desktop) {
	.medium-card {
		grid-template-columns: repeat(1, auto);
		gap: $sm;		

		&__title {
			margin: 0;
		}

		&__date {
			margin-top: $xs;
		}

		&__summary {
			font-size: $font-sm;
			margin-top: 0;
		}

		img {
			height: 200px;
		}
	}
}
</style>