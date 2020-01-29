<template>
	<div class="dropdown">
		<div class="dropdown__link">
			<g-link class="link--dropdown" to="/municipales-nantes">Municipales 2020</g-link>
			<g-link class="link--dropdown" to="/liste-articles">Liste des articles</g-link>
		</div>
	</div>
</template>

<style lang="scss">
.dropdown {
	position: absolute;
	top: $lg;
	right: -50%;
	left: -50%;
	padding: 0 $xxs;
	visibility: hidden;
	pointer-events: none;
	opacity: 0;
	transform: translateY(-5px);
	background-color: $primary-light;
	transition: all 0.3s ease-in-out;
	border: 1.5px dashed $dark-lighter;

	&__link {
		display: flex;
		flex-direction: column;

		a {
			padding: $xs;
		}

		a + a {
			border-top: 1.5px solid $dark-light;
		}
	}
}
</style>