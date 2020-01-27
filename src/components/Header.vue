<template>
	<header class="header">
		<div class="fit-content header__content">
			<g-link to="/">
				<div class="header__logo">
					<img class="header__svg" src="@/assets/logo.svg" alt="Logo du NPA" />
					<span class="header__title">NPA</span>
				</div>
			</g-link>
			<nav>
				<ul>
					<li>
						<g-link to="/#topical" class="link--inline">Nantes 2020</g-link>
					</li>
					<li class="has-dropdown">
						<g-link class="link--inline">
							Actualités
							<font-awesome :icon="['fas', 'chevron-down']" size="sm" />
						</g-link>
						<Dropdown />
					</li>
					<li>
						<g-link to="/#events" class="link--inline">Évènements</g-link>
					</li>
					<li>
						<g-link to="/#footer" class="link--inline">Contact</g-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";

export default {
	components: {
		Dropdown
	},
	mounted() {
		this.$nextTick(() => {
			window.addEventListener("scroll", () => {
				let header = document.getElementsByTagName("header")[0];
				let img = document.getElementsByClassName("header__svg")[0];
				if (document.documentElement.scrollTop >= window.innerHeight / 1.5) {
					img.classList.add("header__svg--mini");
				} else {
					img.classList.remove("header__svg--mini");
				}
			})
		});
	}
}
</script>

<style lang="scss">
nav {
	display: flex;
	align-items: center;

	> ul {
		display: flex;

		li {
			margin-right: $xl;

			&:first-of-type a {
				font-weight: 800;
			}

			&:last-child {
				margin: 0;
			}
		}
	}
}

.has-dropdown {
	position: relative;

	&:focus-within {
		> div {
			pointer-events: inherit;
			visibility: visible;
			opacity: 1;
			transform: translateY(0);
		}
	}
}

.header {
	position: fixed;
    z-index: 999;
	width: 100vw;
	top: 0;
	background-color: $primary-light;

	&__content {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		padding-top: $sm;
		padding-bottom: $sm;
	}

	&__logo {
		display: inline-flex;
		flex-direction: row;
	}

	&__svg {
		width: 48px;
		transition: all 0.3s ease-in-out;
	}

	&__svg--mini {
		width: 36px;
		transition: all 0.3s ease-in-out;
	}

	&__title {
		font-family: "Druk Wide";
		font-weight: 900;
		font-size: $font-md;
		color: $accent;
		padding-left: $xs;
		margin: auto;
	}
}

@media screen and (max-width: $desktop) {
	.header {
		&__content {
			flex-direction: column;
			align-items: center;
		}

		&__svg {
			width: 36px;
		}

		&__svg--mini {
			width: 24px;
		}

		&__title {
			font-size: $font-sm;
		}

		nav {
			margin-top: $sm;
			width: 100%;
			
			ul {
				width: 100%;
				display: flex;
				justify-content: space-between;
			}

			li {
				margin: 0;
			}
		}
	}
}

@media screen and (max-width: $tablet) {
	.header {
		a {
			font-size: $font-xs;
		}
	}
}
</style>