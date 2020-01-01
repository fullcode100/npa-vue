const path = require("path");

function addStyleResource(rule) {
	rule.use("style-resource")
	.loader("style-resources-loader")
	.options({
		patterns: [
			path.resolve(__dirname, "./src/assets/style/style.scss")
		]
	});
}

module.exports = {
	chainWebpack(config) {
		const types = ["vue-modules", "vue", "normal-modules", "normal"];
		types.forEach(type => {
			addStyleResource(config.module.rule("scss").oneOf(type))
		})
	},
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
					accessToken: "JMoer1zQzenOdr5nk7682wtt"
				}
			}
    	}
	]
}