<template>
	<div class="dropdown">
		<div class="dropdown__link">
			<g-link v-for="(value, name) in links" :key="value" class="link--dropdown" :to="value">{{ name }}</g-link>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		links: {
			type: Object
		}
	},
	computed: {
		link() {

		}
	}
}
</script>

<style lang="scss">
.dropdown {
	position: absolute;
	top: $lg;
	right: -$xl;
	left: -$xl;
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

@media screen and (max-width: $desktop) {
	.dropdown {
		left: 0;
		right: -$xxl;
	}
}
</style>