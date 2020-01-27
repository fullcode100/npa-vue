<template>
	<g-link class="big-card" :to="url">
		<div class="big-card__content">
			<h2>
				<span>{{ title }}</span>
			</h2>
			<div class="big-card__summary">
				<p>{{ summary }}</p>
				<span>{{ tag }}</span>
			</div>
		</div>
		<div class="big-card__img">
			<g-image :src="imageURL(src)" />
		</div>
		<div class="big-card__date">
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
        date: {
            type: String,
            default: "01/01",
		},
		src: {
			type: Number,
			default: 0
		},
		title: {
            type: String,
            default: "Titre",
		},
		summary: {
            type: String,
            default: "Chapo",
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
      		return require(`!!assets-loader!~/${directory}/${filename}`);
		}
	}
}
</script>

<style lang="scss">
.big-card {
	display: flex;
	position: relative;
	color: $accent;
	transition: 0.3s ease-in-out;

	&__content {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;

		h2 {
			max-width: 65%;
			font-family: "Druk Text Wide";
			font-weight: 700;
			font-size: $font-lg;

			span {
				display: inline;
				padding: 0 $xxs $xxs 0;
				-webkit-box-decoration-break: clone;
				box-decoration-break: clone;
				background-color: $primary;
			}
		}
	}

	&__summary {
		width: 35%;

		p {
			margin: $lg 0;
			font-size: $font-md;
		}

		span {
			text-transform: uppercase;
			font-weight: 800;
		}
	}

	&__img {
		margin-top: $md*2;
		margin-left: auto;
		filter: grayscale(100);
		transition: 0.5s ease-in-out;

		img {
			width: 475px;
			height: 500px;
			object-fit: cover;
		}
	}

	&__date {
		position: absolute;
		top: $sm;
		right: 0;

		> span {
			@include stroke($accent, $primary, 3px, transparent);
			padding: $xxs;
			font-size: $font-md;
		}
	}

	&:hover {
		color: $dark;

		.big-card__date span {
			background-color: $dark;
			transition: 0.3s ease-in-out;
		}

		.big-card__content {
			&__summary span {
				color: $dark-light;
				transition: 0.3s ease-in-out;
			}

			&__img {
				filter: grayscale(0);
				transition: 0.5s ease-in-out;
			}
		}
	}
}

@media screen and (max-width: $desktop-L) {
	.big-card {
		&__summary {
			width: 50%;
		}
	}
}

@media screen and (max-width: $desktop) {
	.big-card {
		&__summary {
			width: 35%;
		}
	}
}

@media screen and (max-width: $tablet) {
	.big-card {
		&__content {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			h2 {
				font-size: $font-md;
				max-width: 75%;
			}
		}

		&__img {
			width: 100%;

			img {
				width: 100%;
				object-fit: cover;
			}
		}

		&__summary {
			margin-top: 0;
			padding: 0 $xs;
			background-color: $primary;
			width: 100%;

			p {
				font-size: $font-sm;
				margin: $xs 0;
			}
		}
	}
}
</style>