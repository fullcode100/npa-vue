<template>
	<Layout>
		<div class="fit-content">
			<h1>{{ $page.storyblokEntry.name }}</h1>
			<p>{{ story.content.summary }}</p>
			<RichText :text="story.content.body" />
			<img :src="story.content.thumbnail" width="500px" />
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
