const STORYBLOK_APP_TOKEN = "OQTLjjYk6CZyEjOsIITN9gtt";

module.exports = {
	siteName: "NPA Nantes 2020",
	siteDescription: "Site de campagne du NPA pour les municipales 2020 de Nantes.",
	titleTemplate: "%s — NPA Nantes 2020",
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
	],
}