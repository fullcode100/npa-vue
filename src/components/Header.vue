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
					<g-link to="" class="link--primary link--bold">Nantes 2020</g-link>
				</li>
				<li>
					<g-link to="" class="link--primary">Actualités</g-link>
				</li>
				<li>
					<g-link to="" class="link--primary">Évènements</g-link>
				</li>
				<li>
					<g-link to="" class="link--primary">Contact</g-link>
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