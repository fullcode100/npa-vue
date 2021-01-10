<template>
	<div>
		<g-image :src="imageDownload(img)" quality="75" :alt="caption" />
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
		}
	},
	methods: {
		imageDownload(img) {
			if (img != "") {
				const directory = "storyblok_images";
				let index = img.lastIndexOf("/") + 1;
				let filename = img.substring(index);
				let assetsLoader = require(`!!assets-loader!~/${directory}/${filename}`);
				return assetsLoader;
			}	
		},
	}
}
</script>