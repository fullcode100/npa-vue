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
.fade-enter-active {
	transition: opacity 0.5s ease-in-out;
}

.fade-enter {
	opacity: 0;
}

.fit-article {
	margin: 0 auto;
	width: 90%;
	max-width: 750px;
}

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

// Druk Wide

@font-face {
    font-family: "Druk Wide";
    src: url("../assets/fonts/Druk/Druk Wide Bold Regular.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
   	font-display: swap;
}

@font-face {
    font-family: "Druk Wide";
    src: url("../assets/fonts/Druk/Druk Wide Super Regular.woff2") format("woff2");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

// Druk Wide Text

@font-face {
    font-family: "Druk Text Wide";
    src: url("../assets/fonts/Druk/Druk Text Wide Bold.woff2") format("woff2");
    font-weight: 700;
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
