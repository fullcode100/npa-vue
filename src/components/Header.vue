<template>
	<header>
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
						<g-link to="/#topical" class="link--header">Nantes 2020</g-link>
					</li>
					<li>
						<g-link to="/#articles" class="link--header">Actualités</g-link>
					</li>
					<li>
						<g-link to="/#events" class="link--header">Évènements</g-link>
					</li>
					<li>
						<g-link to="/#footer" class="link--header">Contact</g-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<style lang="scss">
header {
	position: fixed;
    z-index: 999;
	width: 100%;
	top: 0;
	background-color: $primary-light;

	> div {
		display: flex;
		justify-content: space-between;
		padding-top: $sm;
		padding-bottom: $sm;
	}
}

nav {
	display: flex;
	align-items: center;

	ul {
		display: flex;

		li {
			margin: $space-inline-xl;

			&:first-of-type a {
				font-weight: 700;
			}

			&:last-child {
				margin: 0;
			}
		}
	}
}

.header {
	&__logo {
		display: inline-flex;
		flex-direction: row;
	}

	&__svg {
		width: 48px;
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
</style>