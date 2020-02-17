const STORYBLOK_APP_TOKEN = "OQTLjjYk6CZyEjOsIITN9gtt";

module.exports = {
	siteName: "NPA Nantes 2020",
	siteDescription: "Site de campagne du NPA pour les municipales 2020 de Nantes.",
	titleTemplate: "%s — NPA Nantes 2020",
	siteUrl: "https://npa-nantes-2020.org",
	icon: {
		favicon: {
			src: "./src/favicon.png",
			sizes: [16, 32, 96]
		}
	},
  	plugins: [
    	{
			use: "gridsome-source-storyblok",
			options: {
				client: {
					accessToken: STORYBLOK_APP_TOKEN
				},
				version: "published",
				typeName: "StoryblokEntry",
				downloadImages: true,
			}
		},
		{
			use: "gridsome-plugin-sass-resources-loader",
      		options: {
				resources: "./src/assets/style/style.scss",
			}
		},
		{
			use: "@gridsome/plugin-sitemap",
			options: {
				cacheTime: 600000,
				exclude: ["/editor"],
				config: {
					"/articles/*": {
						changefreq: "weekly",
						priority: 0.5
				  	},
				  	"/municipales-nantes": {
						changefreq: "monthly",
						priority: 0.7
				  	}
				}
			}
		}
	],
}