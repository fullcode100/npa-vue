<template>
	<main class="article">
		<div class="article__header">
			<div class="fit-article">
				<h1 class="article__title">{{ title }}</h1>
				<div class="article__info">
					<span>
						<font-awesome :icon="['far', 'clock']" />
						Publié le {{ formatDate(date) }}
					</span>
					<span>
						<font-awesome :icon="['fas', 'tags']" />
						<g-link class="link--dark" to="">{{ tag }}</g-link>
					</span>
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