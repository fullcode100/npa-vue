<template>
	<Layout>
		<section class="section">
			<div class="fit-content">
				<h1 class="subtitle--accent">{{ story.name }}</h1>
				<div class="section__list">
					<ul>
						<li v-for="edge in story.belongsTo.edges" :key="edge.node.id">
							<g-link :to="edge.node.full_slug">
								{{ edge.node.name }}
							</g-link>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</Layout>
</template>

<script>
export default {
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
						name
						full_slug
					}
				}
			}
		}
  	}
}
</page-query>
