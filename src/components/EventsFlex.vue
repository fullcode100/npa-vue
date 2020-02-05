<template>
	<div class="events fit-content">
		<h1 class="title--accent">Évènements</h1>
		<Event v-for="(event, key) in eventMap" :key="key"
			:title="event.title"
			:date="event.date"
			:location="event.location"
			:link="event.link"
			:description="event.description"
		/>
		<div v-if="eventMap.length === 0" class="empty">
			<p>Aucun événement pour le moment !</p>
		</div>
		<div class="events__btn">
			<g-link to="/liste-evenements" class="btn--dark">Voir tous les événements</g-link>
		</div>
	</div>
</template>

<script>
import Event from "@/components/Event";

export default {
	components: {
		Event
	},
	computed: {
		eventMap() {
			let edges = this.edges.slice(0, 2);
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
			return this.$static.allStoryblokEntry.edges || [];
		}
	}
}
</script>

<static-query>
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
</static-query>

<style lang="scss">
.events {
	margin-top: $xxl;

	&__btn {
		margin-top: $lg;
		display: flex;
		justify-content: center;
	}
}
</style>