<template>
	<Layout>
		<div class="fit-content">
			<main class="article">
				<div class="article__header">
					<div class="header__img">
						<img :src="resize(story.content.thumbnail, '400x400')" alt="" />
					</div>
					<div class="header__content">
						<h1>{{ story.name }}</h1>
						<p>{{ story.content.summary }}</p>
					</div>
				</div>
				<div class="article__content">
					<RichText :text="story.content.body" />
				</div>
			</main>
		</div>
	</Layout>
</template>

<script>
import RichText from "@/components/Richtext.vue";

export default {
	components: {
		RichText,
	},
	name: "StoryblokEntryTemplate",
	computed: {
		story() {
			return this.$page.storyblokEntry;
		}
	},
  	metaInfo() {
    	return {
			title: this.$page.storyblokEntry.name,
		}
	},
	methods: {
		resize(img, option) {
			const imageService = "//img2.storyblok.com/";
			const path = img.replace("//a.storyblok.com", "");
			return imageService + option + path;
		},
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
  	}
}
</page-query>

<style lang="scss">
.article {	
	&__header {
		display: flex;
		flex-direction: row;
		margin-top: $lg;
		padding: $lg $md;

		img {
			width: 400px;
		}

		.header__content {
			margin-left: $lg;

			h1 {
				margin-top: $md;
				font-size: $lg;
				font-family: "Druk Wide Text";
			}

			p {
				margin-top: $lg;
				font-size: $font-md;
				color: $accent-light;
			}
		}
	}

	&__content {
		margin: 0 auto;
		width: 90%;
		max-width: 750px;
	
		p {
			font-weight: 300;
		}

		a {
			@include link($dark, $dark-lighter, $accent, $accent-lighter);
		}
	}
}
</style>
