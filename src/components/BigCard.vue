<template>
	<g-link class="big-card" :to="url">
		<div class="big-card__fit">
			<div class="big-card__content">
				<span class="big-card__date">{{ formatDate(date) }}</span>
				<h2>
					<span>{{ title }}</span>
				</h2>
				<div class="big-card__summary">
					<p>{{ summary }}</p>
					<span v-for="tag in tags" :key="tag.name">{{ tag.name }}</span>
				</div>
			</div>
		</div>
		<div class="big-card__img">
			<StoryblokImage
				:img="img.path"
				:caption="legend"
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
			type: Object,
		},
		title: {
            type: String,
            default: "Titre",
		},
		summary: {
            type: String,
            default: "Chapo",
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
		formatDate(date) {
			let month = date.slice(4, 6);
			let day = date.slice(6, 8);
			return `${day}/${month}`;
		}
	}
}
</script>

<style lang="scss">
.big-card {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: $lg;
	color: $dark;

	&:hover {
		h2 {
			text-decoration: underline;
		}
	}
	
	&__fit {
		position: relative;
		display: flex;
		
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
	}

	&__content {
		display: flex;
		flex-direction: column;
		align-self: center;
		padding: $md 0;
	}

	h2 {
		color: $accent;
		margin-top: $xs;
		font-family: "Monument Extended", sans-serif;
		font-size: $font-lg;
		font-weight: 700;
	}

	&__date {
		font-family: "Monument Extended", sans-serif;
		font-size: $font-md;
		font-weight: 300;
	}

	&__summary {
		margin-top: $sm;
		font-size: $font-md;
	}

	&__img {
		img {
			width: 100%;
			height: 500px;
			object-fit: cover;
		}
	}
}

@media screen and (max-width: $desktop) {
	.big-card {
		grid-template-columns: repeat(1, auto);
	}
}
</style>