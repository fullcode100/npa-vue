<template>
	<g-link class="little-card" :to="url">
		<div class="little-card__title">
			<h3>{{ title }}</h3>
		</div>
		<div class="little-card__date">
			<span>{{ date }}</span>
		</div>
	</g-link>
</template>

<script>
export default {
    props: {
		url: {
        	type: String,
    		default: "/",
        },
        date: {
            type: String,
            default: "01/01",
		},
		src: {
			type: String,
			default: ""
		},
		title: {
            type: String,
            default: "Titre",
        }
	}
}
</script>

<style lang="scss">
.little-card {
	display: flex;
	position: relative;
	color: $accent;
	padding-left: $md;
	
	&__title h3 {
		font-size: $md;
	}

	&__date {
	position: absolute;
	bottom: 0;
	right: -($lg + $xxs);

		> span {
			@include stroke($accent, $primary, 3px);
			padding: $xxs;
			font-size: $font-md;
		}
	}
}
</style>