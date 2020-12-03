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
					<li class="has-dropdown">
						<g-link class="link--inline">
							<span>Présentation</span>
							<font-awesome :icon="['fas', 'chevron-down']" size="sm" />
						</g-link>
						<Dropdown
							:links="{
								'Une liste anticapitaliste et révolutionnaire': '/presentation',
								'Qui sommes-nous ?': '/presentation#qui-sommes-nous'
							}"
						/>
					</li>
					<li class="has-dropdown">
						<g-link class="link--inline">
							Articles
							<font-awesome :icon="['fas', 'chevron-down']" size="sm" />
						</g-link>
						<Dropdown
							:links="{
								'Nos positions': '/nos-positions',
								'Échos des luttes': '/echos-des-luttes',
								'Paroles de travailleurs et travailleuses': '/paroles-de-travailleurs-et-travailleuses'
							}"
						/>
					</li>
					<li>
						<g-link to="/liste-evenements" class="link--inline">Événements</g-link>
					</li>
					<li id="footer-link">
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
				if (document.documentElement.scrollTop >= window.innerHeight / 2) {
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
	left: 0;
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
		font-family: "Aller";
		font-weight: 700;
		font-size: $font-lg;
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
            height: 100%;
		}

		&__svg--mini {
			width: 24px;
            height: 100%;
		}

		&__title {
			font-size: $font-md;
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

@media screen and (max-width: $mobile) {
	#footer-link {
		display: none;
	}
}
</style>