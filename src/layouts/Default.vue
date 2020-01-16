<template>
	<div>
		<Header class="fit-content" />
		<slot />
		<Footer />
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
	components: {
		Header,
		Footer
	},
	computed: {
		menuOptions() {
			return [
				...this.edges.map(edge => {
					return {
						label: edge.node.name,
						route: edge.node.full_slug
					};
				})
			];
		},
		edges() {
			return this.$static.allStoryblokEntry.edges || [];
		}
	}
};
</script>

<static-query>
query {
	metadata {
    	siteName
  	}

  	allStoryblokEntry {
    	edges {
      		node {
        		id
        		full_slug
        		name
      		}
    	}
  	}
}
</static-query>

<style lang="scss">
.fit-content {
	margin-left: auto;
	margin-right: auto;
	max-width: 75%;
}

// RZ

@font-face {
    font-family: "RZ";
    src: url("../assets/fonts/RZ/RZ Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: auto;
}

// Druk Wide

@font-face {
    font-family: "Druk Wide";
    src: url("../assets/fonts/Druk/Druk Wide Bold Regular.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: "Druk Wide";
    src: url("../assets/fonts/Druk/Druk Wide Super Regular.woff") format("woff");
    font-weight: 900;
    font-style: normal;
    font-display: auto;
}

// Druk Wide Text

@font-face {
    font-family: "Druk Text Wide";
    src: url("../assets/fonts/Druk/Druk Text Wide Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: "Druk Text Wide";
    src: url("../assets/fonts/Druk/Druk Text Wide Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: auto;
}

// Druk Text

@font-face {
    font-family: "Druk Text";
    src: url("../assets/fonts/Druk/Druk Text Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: "Druk Text";
    src: url("../assets/fonts/Druk/Druk Text Heavy.woff") format("woff");
    font-weight: 800;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: "Druk Text";
    src: url("../assets/fonts/Druk/Druk Text Super.woff") format("woff");
    font-weight: 900;
    font-style: normal;
    font-display: auto;
}
</style>
