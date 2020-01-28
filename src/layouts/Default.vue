<template>
	<div>
		<Header />
		<slot />
		<a id="footer"></a>
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
	width: 75%;
}

@media screen and (max-width: $mobile) {
	.fit-content {
		width: 90%;
	}
}

// Avenir

@font-face {
    font-family: "Avenir";
    src: url("../assets/fonts/Avenir/Avenir-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Avenir";
    src: url("../assets/fonts/Avenir/Avenir-Roman.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Avenir";
    src: url("../assets/fonts/Avenir/Avenir-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "Avenir";
    src: url("../assets/fonts/Avenir/Avenir-MediumOblique.woff") format("woff");
    font-weight: 500;
    font-style: oblique;
    font-display: swap;
}

@font-face {
    font-family: "Avenir";
    src: url("../assets/fonts/Avenir/Avenir-Black.woff") format("woff");
    font-weight: 800;
    font-style: normal;
    font-display: swap;
}

// Druk Wide

@font-face {
    font-family: "Druk Wide";
    src: url("../assets/fonts/Druk/Druk Wide Bold Regular.woff") format("woff");
    font-weight: 700;
    font-style: normal;
   	font-display: swap;
}

@font-face {
    font-family: "Druk Wide";
    src: url("../assets/fonts/Druk/Druk Wide Super Regular.woff") format("woff");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

// Druk Wide Text

@font-face {
    font-family: "Druk Text Wide";
    src: url("../assets/fonts/Druk/Druk Text Wide Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
</style>
