<template>
	<g-link class="big-card" :to="url">
		<div class="big-card__title">
			<h3>{{ title }}</h3>
		</div>
		<div class="big-card__content">
			<div class="summary">
				<p>{{ summary }}</p>
				<span>{{ tag }}</span>
			</div>
			<div class="img">
				<g-image :src="src" />
			</div>
		</div>
		<div class="big-card__date">
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
			default: "/"
		},
		title: {
            type: String,
            default: "Titre",
		},
		summary: {
            type: String,
            default: "Chapo",
		},
		tag: {
			type: String,
			default: "NPA",
		}
	}
}
</script>

<style lang="scss">
.big-card {
	display: flex;
	position: relative;
	color: $accent;
	transition: 0.3s ease-in-out;

	&__content {
		display: flex;
		flex-direction: row;
		margin-top: $lg + $xxs;

		.summary {
			position: relative;
			margin: auto;
			padding-right: $xxs;

			p {
				font-size: $font-md;
                font-weight: 300;
				padding-bottom: $lg;
			}

			span {
				color: $accent-light;
				text-transform: uppercase;
				transition: 0.3s ease-in-out;
			}
		}

		.img {
			filter: grayscale(100);
			transition: 0.5s ease-in-out;
		}
	}

	&__date {
		position: absolute;
		top: $sm / 3;
		right: 0;

		> span {
			@include stroke($accent, $primary, 3px, transparent);
			padding: $xxs;
			font-size: $font-md;
		}
	}

	&__title {
		position: absolute;
		width: 50%;
		z-index: 999;

		h3 {
			font-family: "Druk Wide";
			font-weight: 800;
			font-size: $font-xxl/2;
			background-color: $primary;
			padding-bottom: $xs;
		}
	}

	&:hover {
	color: $dark;
	transition: 0.3s ease-in-out;

		.big-card__date span {
			background-color: $dark;
			transition: 0.3s ease-in-out;
		}

		.big-card__content {
			.summary span {
				color: $dark-light;
				transition: 0.3s ease-in-out;
			}

			.img {
				filter: grayscale(0);
				transition: 0.5s ease-in-out;
			}
		}
	}
}
</style>