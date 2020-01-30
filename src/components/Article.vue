<template>
	<main class="article">
		<div class="article__header">
			<div class="fit-article">
				<h1 class="article__title">{{ title }}</h1>
				<p class="article__date">
					<font-awesome :icon="['far', 'clock']" />
					Publié le {{ formatDate(date) }}
				</p>
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
	}

	&__header {
		padding: $xxl 0 $xl 0;
		background-color: $primary-dark;
	}

	&__date {
		margin-top: $md;
		color: $dark-light;
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
			max-width: fit-content;
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
	}
}
</style>