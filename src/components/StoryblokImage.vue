<template>
	<div>
		<g-image :src="imageDownload(img)" :alt="caption" />
	</div>
</template>

<script>
export default {
	props: {
		img: {
			type: String,
			default: "/"
		},
		caption: {
			type: String,
			default: "Légende de l'image"
		},
		card: {
			type: String,
			default: ""
		}
	},
	methods: {
		imageDownload(img) {
			if (img != "") {
				const directory = "storyblok_images";
				let index = img.lastIndexOf("/") + 1;
				let filename = img.substring(index);
				let assetsLoader = require(`!!assets-loader?fit=cover!~/${directory}/${filename}`);

				switch(this.$props.card) {
					case "littleCard":
						assetsLoader = require(`!!assets-loader?width=100&height=100&fit=cover!~/${directory}/${filename}`);
						break;
					case "bigCard":
						assetsLoader = require(`!!assets-loader?width=475&height=550&fit=cover!~/${directory}/${filename}`);
						break;
				}

				return assetsLoader;
			}
		},
	}
}
</script>