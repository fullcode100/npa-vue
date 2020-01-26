<template>
	<g-link class="little-card" :to="url">
		<div class="little-card__content">
			<span>{{ tag }}</span>
			<h3>{{ title }}</h3>
			<div class="little-card__date">
				<font-awesome :icon="['far', 'clock']" />
				<span>{{ date }}</span>
			</div>
		</div>
		<div class="little-card__img">
			<g-image :src="imageURL(src)" />
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
			type: Number,
			default: 0,
		},
		title: {
            type: String,
            default: "Titre",
        },
		tag: {
			type: String,
			default: "NPA",
		}
	},
	methods: {
		imageURL(indexImage) {
			const path = this.$page.allStoryblokEntry.edges[indexImage].node.content.thumbnail;
			const directory = "storyblok_images";
			let index = path.lastIndexOf("/") + 1;
			let filename = path.substring(index);
      		return require(`!!assets-loader?height=100&width=100&quality=100&fit=cover!~/${directory}/${filename}`);
		}
	}
}
</script>

<style lang="scss">
.little-card {
	display: flex;
	position: relative;
	justify-content: space-between;
	color: $accent;
	margin-top: $lg;
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
		color: $dark-lighter;
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