<template>
	<Layout>
		<div class="list fit-content">
			<h1 class="title--dark">Liste des événéments</h1>
			<Event v-for="(event, key) in eventMap" :key="key"
				:title="event.title"
				:date="event.date"
				:location="event.location"
				:link="event.link"
				:description="event.description"
			/>
		</div>
	</Layout>
</template>

<script>
import Event from "@/components/Event"

export default {
	metaInfo: {
		title: "Liste des événements"
	},
	components: {
		Event
	},
	computed: {
		eventMap () {
			let edges = this.edges;
      		return [
        		...edges.map(edge => {
          			return {
						title: edge.node.content.title,
						date: edge.node.content.date,
						location: edge.node.content.location,
						link: edge.node.content.link.url,
						description: edge.node.content.description
          			}
       			})
      		]
		},
		edges() {
			return this.$page.allStoryblokEntry.edges || [];
		}
	}
}
</script>

<page-query>
query {
	allStoryblokEntry(filter: {tag_list: {contains: "event"}}) {
		edges {
			node {
				id
				content
				tag_list
			}
		}
	}
}
</page-query>

<style lang="scss">
.listArticle {
	margin-top: $xxl;
}
</style>