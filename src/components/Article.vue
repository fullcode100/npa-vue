<template>
	<main class="article">
		<div class="article__header">
			<div class="fit-article">
				<h1 class="article__title">{{ title }}</h1>
				<div class="article__date">
					<font-awesome :icon="['far', 'clock']" />
					Publié le {{ formatDate(date) }}
				</div>
				<div class="article__tags">
					<font-awesome :icon="['fas', 'tags']" />
					{{ tag }}
				</div>
				<p class="article__summary">{{ summary }}</p>
			</div>
		</div>
		<div class="fit-content article__img">
			<g-image :src="img" :alt="caption" />
			<p>{{ caption }}</p>
		</div>
		<div class="fit-article article__content">
			<RichText :text="content" />
		</div>
	</main>
</template>

<script>
import moment from "moment";
import RichText from "@/components/Richtext.vue";

export default {
	components: {
		RichText
	},
	props: {
		title: {
			type: String,
			default: "Titre de l'article"
		},
		date: {
			type: String,
			default: "01/01"
		},
		summary: {
			type: String,
			default: "Résumé des grandes lignes de l'article"
		},
		img: {
			type: Object,
			default: ""
		},
		caption: {
			type: String,
			default: "Légende de l'image"
		},
		content: {
			type: Object,
			default: ""
		},
		tag: {
			type: String,
			default: ""
		}
	},
	methods: {
		formatDate(date) {
			moment.locale("fr");
			return moment(date, "YYYY-MM-DD").format("LL");   
		}
	}
}
</script>

<style lang="scss">
.article {
	color: $dark;

	&__title {
		font-family: "Druk Text Wide";
		font-weight: 700;
		letter-spacing: -0.5px;
		font-size: $font-lg;
		margin-bottom: $md;
	}

	&__header {
		padding: $xxl 0 $xl 0;
		background-color: $primary-dark;
	}

	&__date {
		color: $dark-light;
		margin-bottom: $xs;
	}

	&__tags {
		color: $dark-light;
		text-transform: uppercase;
		margin-bottom: $md;
	}

	&__summary {
		margin-top: $sm;
		font-size: $font-md;
	}

	&__img {
		margin-top: $xl;
		display: flex;
		align-items: center;
		flex-direction: column;

		img {
			object-fit: cover;
			max-width: 75%;
		}

		p {
			color: $dark-light;
			margin-top: $xs;
		}
	}

	&__content {
		margin-top: $lg;

		ul {
			list-style: square inside;
		}

		li {
			margin-top: $sm;
		}

		p + p {
			margin-top: $md;
		}

		h1,
		h2,
		h3,
		h4 {
			margin: $md 0 $sm 0;
			font-size: $font-md;
			font-family: "Druk Text Wide";
		}

		a {
			@include link(rgba($dark, 0.7), rgba($dark, 0.4), $dark);
		}
	}
}

@media screen and (max-width: $tablet) {
	.article {
		&__title {
			font-size: $font-md;
		}

		&__summary {
			font-size: $font-sm;
		}
	}
}
</style>