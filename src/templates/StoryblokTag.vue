<template>
	<Layout>
		<section class="section">
			<div class="fit-content">
				<h1 class="subtitle--accent">{{ story.name }}</h1>
				<div class="section__list">
					<MediumCard v-for="edge in story.belongsTo.edges" :key="edge.node.id"
						:title="edge.node.content.title"
						:url="edge.node.full_slug"
						:date="edge.node.created_at"
						:summary="edge.node.content.summary"
						:img="edge.node.content.thumbnail"
						:tags="edge.node.tag_list"
					/>
				</div>
			</div>
		</section>
	</Layout>
</template>

<script>
import MediumCard from "@/components/MediumCard.vue";

export default {
	components: {
		MediumCard
	},
	name: "StoryblokTagTemplate",
	computed: {
		story() {
			return this.$page.storyblokTag;
		},
	}
}
</script>

<page-query>
query ($id: ID!) {
	storyblokTag (id: $id) {
		name
		belongsTo {
			edges {
				node {
					...on StoryblokEntry {
						id
						name
						created_at(format:"YYYYMMDDHHmm")
						full_slug
						content
						tag_list {
							name
						}
					}
				}
			}
		}
  	}
}
</page-query>