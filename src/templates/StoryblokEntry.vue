<template>
	<Layout>
		<div class="fit-content">
			<main class="article">
				<div class="article__header">
					<div class="header__img">
						<img :src="story.content.thumbnail" alt="" />
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
		background-color: $dark;
		color: $primary;
		margin-top: $xl;
		padding: $lg $md;

		img {
			width: 250px;
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
