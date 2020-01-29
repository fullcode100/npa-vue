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
			<StoryblokImage
				:img="img"
				:legend="legend"
				card="bigCard"
			/>
		</div>
		<div class="big-card__date">
			<span>{{ formatDate(date) }}</span>
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
            default: "Chapo",
		},
		legend: {
			type: String,
			default: "Légende de l'image",
		},
		tag: {
			type: String,
			default: "NPA",
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
		width: calc(100% - 500px);

		p {
			margin: $lg 0 $sm 0;
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
			transition: 0.3s ease-in-out;
		}
	}

	&:hover {
		color: $dark;

		.big-card__date span {
			background-color: $dark;
			transition: 0.3s ease-in-out;
		}

		.big-card__img {
			filter: grayscale(0);
			transition: 0.5s ease-in-out;
		}
	}
}

@media screen and (max-width: $desktop) {
	.big-card__img img {
		width: 350px;
	}

	.big-card__summary {
		width: calc(100% - 350px);
	}

	.big-card__content h2 {
		font-size: $font-md;
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
				max-width: 70%;
			}
		}

		&__date span {
			font-size: $font-sm;
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