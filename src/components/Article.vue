<template>
	<main class="article">
		<div class="article__header">
			<div class="fit-article">
				<div class="article__tag">
					• <span v-for="tag in tags" :key="tag">{{ tag }}</span>
				</div>
				<h1 class="article__title">{{ title }}</h1>
				<p class="article__summary">{{ summary }}</p>
				<div class="article__date">
					<font-awesome :icon="['far', 'clock']" />
					<span>Publié le {{ formatDate(date) }}</span>
				</div>
			</div>
		</div>
		<div class="fit-content article__img">
			<g-image :src="img" :alt="caption" />
			<p>{{ caption }}</p>
		</div>
		<div class="fit-article article__content">
			<RichText :text="content" />
			<RichText :text="sources" />
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
		tags: {
			type: Array,
			default: []
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
		sources: {
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