<template>
	<div>
		<g-link to="/">
			<img class="header__logo" src="@/assets/logo.svg" alt="Logo du NPA" />
			<span class="header__title">NPA</span>
		</g-link>
	</div>
</template>

<style lang="scss">
.header__logo {
	width: 128px;
}

.header__title {
	font-family: "Druk Wide";
	font-weight: 800;
	font-size: $md;
}
</style>