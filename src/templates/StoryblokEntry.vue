<template>
	<Layout>
		<Article 
			:title="story.content.title"
			:date="story.created_at"
			:summary="story.content.summary"
			:tags="story.tag_list"
			:img="imageURL"
			:caption="story.content.caption"
			:content="story.content.body"
			:sources="story.content.sources"
			:slug="story.full_slug"
		/>
		<div class="newsletter">
			<a class="link--inline" href="https://framalistes.org/sympa/subscribe/contact_npa.rosalux" target="_blank" rel="noreferrer">
				Rejoignez notre newsletter ! 📧
			</a>
		</div>
	</Layout>
</template>

<script>
import Article from "@/components/Article";

export default {
	components: {
		Article
	},
	name: "StoryblokEntryTemplate",
	metaInfo() {
		return {
			title: this.$page.storyblokEntry.content.title,
			meta: [
				{
					meta: "description",
					content: this.$page.storyblokEntry.content.summary
                },
                {
					property: "og:url",
					content: `https://npa-nantes-2020.org/${this.$page.storyblokEntry.full_slug}/`
                },
                {
                    property: "og:type",
                    content: "article"
                },
				{
					property: "og:title",
					content: this.$page.storyblokEntry.content.title
				},
				{
					property: "og:description",
					content: this.$page.storyblokEntry.content.summary,
                },
				{
					property: "og:image",
					content: "//img2.storyblok.com/1200x630/filters:quality(30)" + this.$page.storyblokEntry.content.thumbnail.replace("//a.storyblok.com", "") || ""
                },
                {
					name: "twitter:card",
					content: this.$page.storyblokEntry.content.thumbnail ? "summary_large_image" : "summary",
				},
                {
                    name: "twitter:title",
                    content: this.$page.storyblokEntry.content.title
                },
                {
                    name: "twitter:description",
                    content:  this.$page.storyblokEntry.content.summary
                },
                {
                    name: "twitter:image",
                    content:  "//img2.storyblok.com/1200x630/filters:quality(30)" + this.$page.storyblokEntry.content.thumbnail.replace("//a.storyblok.com", "") || ""
                }
			]
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
			return require(`!!assets-loader?width=900&height=600&fit=cover!~/${directory}/${filename}`);
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
		full_slug
    	content
		tag_list
		created_at(format:"YYYYMMDD")
  	}
}
</page-query>

<style lang="scss">
.newsletter {
	margin-top: $lg;
	text-align: center;
}
</style>