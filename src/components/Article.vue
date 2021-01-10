<template>
	<main class="article">
		<div class="article__header fit-article">
			<div v-if="tags.length !== 0" class="article__tag">
				<g-link v-for="tag in tags" :key="tag.id" :to="tagUrl(tag.name)">{{ tag.name }}</g-link>
			</div>
			<h1 class="article__title">{{ title }}</h1>
			<div class="article__summary">
				<p>{{ summary }}</p>
			</div>
			<div class="article__date">
				<font-awesome :icon="['far', 'clock']" />
				<span>Publié le {{ formatDate(date) }}</span>
			</div>
		</div>
		<div class="fit-content article__img">
			<div v-if="video.vimeo_raw === ''">
				<g-image :src="img" :alt="caption" />
				<p>{{ caption }}</p>
			</div>
			<div class="article__video" v-else v-html="video.vimeo_oembed.response.html"></div>
		</div>
		<div class="article__body fit-article">
			<div class="article__share">
				<ul>
					<li>
						<a :href="shareFacebook()" target="_blank" rel="noopener noreferrer">
							<font-awesome :icon="['fab', 'facebook-square']" size="lg" />
						</a>
					</li>
					<li>
						<a :href="shareTwitter()" target="_blank" rel="noopener noreferrer">
							<font-awesome :icon="['fab', 'twitter']" size="lg" />
						</a>	
					</li>
					<li>
						<a :href="shareMail()" target="_blank" rel="noopener noreferrer">
							<font-awesome :icon="['fas', 'envelope']" size="lg" />
						</a>
					</li>
				</ul>
			</div>
			<div class="article__content">
				<RichText :text="content" />
				<RichText :text="sources" />
			</div>
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
			default() {
            	return []
        	}
		},
		img: {
			type: Object,
			default: ""
		},
		video: {
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
			default: () => {}
		},
		slug: {
			type: String
		}
	},
	methods: {
		formatDate(date) {
			console.log(this.$props.video)
			moment.locale("fr");
			return moment(date, "YYYY-MM-DD").format("LL");   
		},
		shareFacebook() {
			return `https://www.facebook.com/sharer/sharer.php?u=https://npa-nantes-2020.org/${this.$props.slug}`;
		},
		shareTwitter() {
			return `https://twitter.com/home?status=https://npa-nantes-2020.org/${this.$props.slug}`;
		},
		shareMail() {
			return `mailto:?subject=${this.$props.title}&body=https://npa-nantes-2020.org/${this.$props.slug}`;
		},
		tagUrl(tag) {
			return `tag/${tag}`;
		}
	}
}
</script>