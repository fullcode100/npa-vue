<template>
	<Layout>
		<section class="section">
			<div class="fit-content">
				<h1 class="subtitle--dark">Liste des événéments</h1>
				<div class="section__list">
					<Event v-for="(event, key) in eventMap" :key="key"
						:title="event.title"
						:date="event.date"
						:location="event.location"
						:link="event.link"
						:description="event.description"
					/>
					<div v-if="eventMap.length === 0" class="empty">
						<p>Aucun événément à afficher !</p>
					</div>
				</div>
			</div>
		</section>
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
	allStoryblokEntry(filter: { full_slug: {regex: "(^events\/)"} }, sortBy: "created_at", order: DESC) {
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