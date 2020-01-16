<template>
	<g-link class="big-card" :to="url">
		<div class="big-card__title">
			<h2>
				<span>{{ title }}</span>
			</h2>
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
		margin-top: $md*2;

		.summary {
			align-self: flex-end;
			padding-right: $xxs;
			margin-bottom: $xl;

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
		top: $sm;
		right: 0;

		> span {
			@include stroke($accent, $primary, 3px, transparent);
			padding: $xxs;
			font-size: $font-md;
		}
	}

	&__title {
		position: absolute;
		max-width: 65%;
		z-index: 999;

		h2 {
			font-family: "Druk Text Wide";
			font-weight: 700;
			font-size: $font-lg;

			span {
				display: inline;
				line-height: 1.4;
				padding-right: $sm/2;
				padding-bottom: $sm/2;
				-webkit-box-decoration-break: clone;
				box-decoration-break: clone;
				background-color: $primary;
			}
		}
	}

	&:hover {
		color: $dark;

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