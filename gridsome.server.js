module.exports = function (api) {
	api.loadSource(({ addCollection }) => {})
  
	api.createPages(async ({ graphql, createPage }) => {
		const { data } = await graphql(`{
			allStoryblokEntry(filter: { full_slug: {regex: "(^articles\/)"} }) {
		  		edges {
					node {
			  			id
			  			full_slug
					}
		  		}
			}
	  	}`)
  
	  	data.allStoryblokEntry.edges.forEach(({ node }) => {
			createPage({
				path: `/${node.full_slug}`,
		  		component: "./src/templates/StoryblokEntry.vue",
		  		context: {
					id: node.id
		  		}
			})
	  	})
	});
}