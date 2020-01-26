<template>
	<div class="dropdown">
		<div class="dropdown__link">
			<g-link class="link--dropdown" to="">Municipales 2020</g-link>
			<g-link class="link--dropdown" to="">Bulletin <span class="oblique">Révolution !</span></g-link>
			<g-link class="link--dropdown" to="">Convergences révolutionnaires</g-link>
		</div>
	</div>
</template>

<style lang="scss">
.dropdown {
	position: absolute;
	top: $sm;
	left: -$md*2;
	width: $lg*6;
	visibility: hidden;
	pointer-events: none;
	opacity: 0;
	transform: translateY(-5px);
	background-color: $primary-light;
	transition: all 0.3s ease-in-out;

	&__link {
		display: flex;
		flex-direction: column;
		padding: 0 $sm $xs $sm;

		a {
			padding: $md 0;
		}
	}
}
</style>