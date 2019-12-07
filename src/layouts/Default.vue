<template>
	<div>
		<Header />
		<!-- <header>
			<strong>
				<g-link to="/home">{{ $static.metadata.siteName }}</g-link>
			</strong>
			<nav>
				<g-link	v-for="(menu, key) in menuOptions" :key="key"	:to="menu.route">{{ menu.label }}</g-link>
			</nav>
		</header> -->
		<slot />
	</div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
	components: {
		Header
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

// Gosha Sans

@font-face {
    font-family: "Gosha Sans";
    src: url("../assets/fonts/GoshaSans/GoshaSans-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: "Gosha Sans";
    src: url("../assets/fonts/GoshaSans/GoshaSans-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: "Gosha Sans";
    src: url("../assets/fonts/GoshaSans/GoshaSans-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: "Gosha Sans";
    src: url("../assets/fonts/GoshaSans/GoshaSans-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: "Gosha Sans";
    src: url("../assets/fonts/GoshaSans/GoshaSans-Ultrabold.woff") format("woff");
    font-weight: 800;
    font-style: normal;
    font-display: auto;
}

// Druk Wide

@font-face {
    font-family: "Druk Wide";
    src: url("../assets/fonts/Druk Wide/Druk Wide Medium Regular.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: "Druk Wide";
    src: url("../assets/fonts/Druk Wide/Druk Wide Medium Italic.woff") format("woff");
    font-weight: 500;
    font-style: italic;
    font-display: auto;
}

@font-face {
    font-family: "Druk Wide";
    src: url("../assets/fonts/Druk Wide/Druk Wide Bold Regular.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: "Druk Wide";
    src: url("../assets/fonts/Druk Wide/Druk Wide Bold Italic.woff") format("woff");
    font-weight: 700;
    font-style: italic;
    font-display: auto;
}

@font-face {
    font-family: "Druk Wide";
    src: url("../assets/fonts/Druk Wide/Druk Wide Heavy Regular.woff") format("woff");
    font-weight: 800;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: "Druk Wide";
    src: url("../assets/fonts/Druk Wide/Druk Wide Heavy Italic.woff") format("woff");
    font-weight: 800;
    font-style: italic;
    font-display: auto;
}

@font-face {
    font-family: "Druk Wide";
    src: url("../assets/fonts/Druk Wide/Druk Wide Super Regular.woff") format("woff");
    font-weight: 900;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: "Druk Wide";
    src: url("../assets/fonts/Druk Wide/Druk Wide Super Italic.woff") format("woff");
    font-weight: 900;
    font-style: italic;
    font-display: auto;
}
</style>
