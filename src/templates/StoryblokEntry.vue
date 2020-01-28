<template>
	<Layout>
		<component
      		v-if="story.content.component"
      		:key="story.content._uid"
      		:blok="story.content"
      		:is="story.content.component"
    	/>
	</Layout>
</template>

<script>
import RichText from "@/components/Richtext.vue";
import MediumCard from "@/components/MediumCard.vue";

export default {
	components: {
		RichText,
		MediumCard
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
</style>
