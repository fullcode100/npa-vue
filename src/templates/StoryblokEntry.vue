<template>
	<Layout>
		<main class="article">
			<div class="article__header">
				<div class="fit-article">
					<div class="article__img">
						<g-image :src="imageURL" />
					</div>
					<h1 class="title--dark">{{ story.name }}</h1>
					<div class="article__summary">
						<p>{{ story.content.summary }}</p>
					</div>
				</div>
			</div>
			<div class="fit-article article__content">
				<RichText :text="story.content.body" />
			</div>
		</main>
	</Layout>
</template>

<script>
import RichText from "@/components/Richtext.vue";

export default {
	components: {
		RichText
	},
	name: "StoryblokEntryTemplate",
	metaInfo() {
		return {
			title: this.$page.storyblokEntry.name
		}
	},
	computed: {
		story() {
			return this.$page.storyblokEntry;
		},
		imageURL() {
			const path = this.$page.storyblokEntry.content.thumbnail;
			const directory = "storyblok_images";
			let index = path.lastIndexOf("/") + 1;
			let filename = path.substring(index);
      		return require(`!!assets-loader?width=800&quality=100&fit=inside!~/${directory}/${filename}`);
		}
	}
};
</script>

<page-query>
query StoryblokEntry ($id: ID) {
	storyblokEntry (id: $id) {
		name
    	id
    	slug
    	content
		tag_list
  	}
}
</page-query>

<style lang="scss">
.fit-article {
	margin: 0 auto;
	width: 90%;
	max-width: 750px;
}

.article {
	color: $dark;

	&__header {
		padding: $xxl 0 $xl 0;
		background-color: $primary-dark;
	}

	&__summary {
		margin-top: $xl;
		
		p {
			font-size: $font-md;
		}
	}

	&__content {
		margin-top: $xl;

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
