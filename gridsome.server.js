module.exports = function (api) {
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

	api.createPages(async ({ graphql, createPage }) => {
		const { data } = await graphql(`{
			allStoryblokTag {
				edges {
					node {
						id
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
			}
		}`)

		console.log(JSON.stringify(data));
		
		data.allStoryblokTag.edges.forEach(({ node }) => {
			createPage({
				path: `/tag/${node.name}`,
				component: "./src/templates/StoryblokTag.vue",
				context: {
					id: node.id
				}
			})
		})
	});
}