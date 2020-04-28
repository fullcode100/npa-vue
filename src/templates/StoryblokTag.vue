<template>
	<Layout>
		<section class="section">
			<div class="fit-content">
				<h1 class="subtitle--accent">{{ story.name }}</h1>
				<div class="section__list">
					<ul>
						<li v-for="edge in story.belongsTo.edges" :key="edge.node.id">
							<LittleCard
								:title="edge.node.content.title"
								:url="edge.node.full_slug"
								:date="edge.node.created_at"
								:img="edge.node.content.thumbnail"
								:tags="edge.node.tag_list"
							/>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</Layout>
</template>

<script>
import LittleCard from "@/components/LittleCard.vue";

export default {
	components: {
		LittleCard
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