<template>
	<g-link class="little-card">
		<div class="little-card__date">
			<span>{{ date }}</span>
		</div>
		<div class="little-card__title">
			<h2>{{ title }}</h2>
		</div>
	</g-link>
</template>

<script>
export default {
    props: {
        date: {
            type: String,
            default: "01/01",
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
	flex-direction: column;
	position: relative;
	color: $accent;
	padding-left: $xs;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		width: 3px;
		height: 100%;
		background-color: $accent;
		transform: scaleY(0.6);
		transform-origin: top;
		transition: transform 0.3s ease-in-out;
	}

	&:hover::before {
		transform: scaleY(1);
		transform-origin: top;
		transition: transform 0.3s ease-in-out;
	}

	&:focus {
		outline: $accent 3px dashed;
	}
}

.little-card__date {
	position: absolute;
	top: 8%;
	left: -8%;

	> span {
		@include stroke($accent, $primary, 3px);
		padding: $xxs;
		font-size: $font-md;
	}
}

.little-card__title h2 {
	font-size: $font-lg;
	padding: $md 0 $xxs 0;
}
</style>