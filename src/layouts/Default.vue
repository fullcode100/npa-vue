<template>
	<div>
		<Header />
			<transition name="fade" appear>
				<div>
					<slot />
				</div>	
			</transition>
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
	}
};
</script>

<style lang="scss">
.fit-article {
	margin: 0 auto;
	width: 90%;
	max-width: 750px;
}

.fit-content {
	margin-left: auto;
	margin-right: auto;
	width: 90%;
}

@media screen and (min-width: 1920px) {
	.fit-content {
		width: 75%;
	}
}

// Monument Extended

@font-face {
    font-family: "Monument Extended";
    src: url("../assets/fonts/Monument/MonumentExtended-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
   	font-display: swap;
}

@font-face {
    font-family: "Monument Extended";
    src: url("../assets/fonts/Monument/MonumentExtended-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
   	font-display: swap;
}

@font-face {
    font-family: "Monument Extended";
    src: url("../assets/fonts/Monument/MonumentExtended-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
   	font-display: swap;
}

@font-face {
    font-family: "Monument Extended";
    src: url("../assets/fonts/Monument/MonumentExtended-Black.woff") format("woff");
    font-weight: 900;
    font-style: normal;
   	font-display: swap;
}

// Aller 

@font-face {
    font-family: "Aller";
    src: url("../assets/fonts/Aller/Aller Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
</style>
