<template>
	<footer>
		<div class="fit-content">
			<div class="footer">
				<div class="footer__head">
					<div class="footer__logo">
						<g-image src="@/assets/logo.svg" width="64" alt="Logo du NPA" />
						<span>NPA</span>
					</div>
					<div class="footer__networks">
						<span>Suivez-nous sur les réseaux sociaux !</span>
						<ul>
							<li>
								<a href="https://www.facebook.com/NPA-l%C3%89tincelle-Nantes-344133152708146/" target="_blank" rel="noopener noreferrer">
									<font-awesome :icon="['fab', 'facebook-square']" size="2x" />
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/nantes.revolutionnaire" target="_blank" rel="noopener noreferrer">
									<font-awesome :icon="['fab', 'instagram']" size="2x" />
								</a>
							</li>
							<li>
								<a href="mailto:npanantes2018@gmail.com" target="_blank" rel="noopener noreferrer">
									<font-awesome :icon="['fas', 'envelope']" size="2x" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="footer__content">
					<ul>
						<li>
							<h4>Nantes 2020</h4>
						</li>
						<li>
							<g-link to="/presentation" class="link--primary">Une liste anticapitaliste et révolutionnaire</g-link>
						</li>
						<li>
							<g-link to="/presentation#qui-sommes-nous" class="link--primary">Qui sommes-nous ?</g-link>
						</li>
					</ul>
					<ul>
						<li>
							<h4>Actualités</h4>
						</li>
						<li>
							<g-link to="/liste-articles" class="link--primary">Liste des articles</g-link>
						</li>
					</ul>
					<ul>
						<li>
							<h4>Nous rencontrer</h4>
						</li>
						<li>
							<g-link to="/liste-evenements" class="link--primary">Liste des événéments</g-link>
						</li>
					</ul>
					<ul>
						<li>
							<h4>Nos camarades</h4>
						</li>
						<li>
							<a href="http://npa2009.org/" class="link--primary" rel="noreferrer">NPA Site national</a>
						</li>
						<li>
							<a href="https://npa44.org/" class="link--primary" rel="noreferrer">NPA 44</a>
						</li>
						<li>
							<a href="https://convergencesrevolutionnaires.org/" class="link--primary" rel="noreferrer">Convergences révolutionnaires</a>
						</li>
					</ul>			
				</div>
				<div class="footer__bottom">
					<p>Crédits photo 📷 :
						<a class="link--primary" href="https://www.facebook.com/bsaz.photographie/" target="_blank" rel="noreferrer noreferrer">
							<span class="bold">Bsaz</span>
						</a>
					</p>
					<p>Un site réalisé par <span class="bold">Ekkaia</span> avec 💖</p>
					<p>Hébergé par <span class="bold">Netlify</span> et propulsé par <span class="bold">Gridsome</span></p>
				</div>
			</div>
		</div>
	</footer>
</template>

<style lang="scss">
footer {
	background-color: $dark;
	color: $primary;
	padding: $xxl 0 $xl 0;
	margin-top: $xl;
}

.footer {
	&__head {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		img {
			filter: grayscale(100%) brightness(1000%);
		}
	}

	&__logo {
		display: flex;

		img {
			width: 64px;
			height: 100%;
		}

		> span {
		    font-family: "Aller";
			font-weight: 700;
			font-size: $font-lg;
			margin: auto;
			padding-left: $sm;
		}
	}

	&__networks {
		ul {
			display: flex;
			flex-direction: row;
			justify-content: center;
			margin-top: $sm;
		}

		span {
			font-weight: 500;
			font-size: $font-md;
		}

		li + li {
			margin-left: $md;
		}
		
		a {
			color: $primary;
			transition: all 0.3s ease-in-out;

			&:hover {
				color: $dark-light;
			}
		}
	}

	&__content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: $xl;

		h4 {	
			font-size: $font-md;
			font-family: "Monument Extended", sans-serif;
		}

		li + li {
			margin-top: $md;
		}
	}

	&__bottom {
		margin-top: $xl;
		display: flex;
		text-align: center;
		flex-direction: column;
		color: $dark-lighter;

		p + p {
			margin-top: $xxs;
		}
	}
}

// Media Quieries

@media screen and (max-width: $desktop) {
	.footer {
		&__head {
			flex-direction: column
		}

		&__networks {
			margin-top: $lg;
		}

		&__content {
			flex-direction: column;
			text-align: center;

			ul {
				margin-top: $lg;
			
				&:first-of-type {
					margin-top: 0;
				}
			}
		}
	}
}
</style>