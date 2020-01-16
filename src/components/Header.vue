<template>
	<header>
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
	</header>
</template>

<style lang="scss">
header {
	display: flex;
	justify-content: space-between;
	margin-top: $xl;
}

nav ul {
	display: flex;
	margin-top: $sm;
	font-size: $font-md;
	
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

.header__logo {
	display: inline-flex;
	flex-direction: column;
}

.header__svg {
	width: 98px;
}

.header__title {
	font-family: "Druk Wide";
	font-weight: 800;
	font-size: $md;
	color: $accent;
	padding-top: $xs;
	margin: auto;
}
</style>