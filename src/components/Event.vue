<template>
	<div class="event">
		<div class="event__header">
			<h3 class="event__title">{{ title }}</h3>
			<span class="event__date">{{ date }}</span>
		</div>
		<div class="event__content">
			<p class="event__location">
				<font-awesome :icon="['fas', 'compass']" />
				{{ location }}
			</p>
			<p>{{ description }}</p>
			<a :href="link" class="link--inline" target="_blank" rel="noreferrer noreferrer">
				Voir l'événement sur Facebook
				<font-awesome :icon="['fas', 'external-link-square-alt']" />
			</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Titre"
		},
		date: {
			type: String,
			default: "01/01"
		},
		location: {
			type: String,
			default: "2 rue Richard-Lenoir, 93100 Montreuil"
		},
		link: {
			type: String,
			default: "/"
		},
		description: {
			type: String,
			default: "Description de l'événement."
		}
	}
}
</script>

<style lang="scss">
.event {
	display: flex;
	position: relative;
	flex-direction: column;
	max-width: 500px;
	color: $accent;
	margin: $lg auto 0 auto;
	padding: $md 0;
	transition: 0.3s ease-in-out;

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: $accent;
	}

	&__header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		vertical-align: center;
	}

	&__date {
		@include stroke($accent, $primary, 3px, transparent);
		padding: $xxs;
		font-size: $font-sm;
		transition: 0.3s ease-in-out;
	}

	&__title {
		font-family: "Druk Text Wide";
		font-weight: 700;
		font-size: $font-md;
	}

	&__content {
		margin-top: $md;
		font-weight: 400;

		a {
			margin-top: $sm;
		}
	}

	&__location {
		font-size: $font-xs;
		color: $dark;
		margin-bottom: $xxs;
	}
}
</style>