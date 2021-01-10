<template>
	<div class="event">
		<h3 class="event__title">{{ title }}</h3>
		<div class="event__link">
			<a :href="link" class="link--dark" target="_blank" rel="noreferrer noreferrer">
				Voir l'événement sur Facebook 📌
			</a>
		</div>
		<div class="event__content">
			<p>{{ description }}</p>
		</div>
		<div class="event__info">
			<span>
				<font-awesome :icon="['fas', 'map-marker-alt']" />
				{{ location }}
			</span>
			<span>
				<font-awesome :icon="['fas', 'calendar-alt']" />
				{{ endOf(date) }}
			</span>
		</div>
	</div>
</template>

<script>
import moment from "moment";

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
	},
	methods: {
		endOf(date) {
			moment.locale("fr");
			return moment(date, "YYYY-MM-DD hh:mm p").format("LL à LT");   
		}
	}
}
</script>

<style lang="scss">
.event {
	display: flex;
	flex-direction: column;
	max-width: 600px;
	color: $dark;
	margin-top: $lg;
	padding-bottom: $md;
	transition: 0.3s ease-in-out;

	&__info {
		margin-top: $md;
		color: $dark-light;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		line-height: 1.4;

		span {
			width: 50%;

			&:first-child {
				margin-right: $xxs;
			}
		}

		svg {
			margin-right: $xxs;
		}
	}

	&__title {
		font-family: "Monument Extended", sans-serif;
		font-weight: 700;
		font-size: $font-md;
		color: $accent;
	}

	&__link {
		margin-top: $xs;
	}

	&__content {
		color: $dark;
		margin-top: $md;
		font-weight: 400;
	}
}

@media screen and (max-width: $tablet) {
	.event {
		&__info {
			flex-direction: column;

			span {
				width: auto;
			}

			span + span {
				margin-top: $xxs;
			}
		}
	}
}
</style>
