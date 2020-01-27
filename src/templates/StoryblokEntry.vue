<template>
	<Layout>
		<div class="fit-content">
			<main class="article">
				<div class="article__header">
					<div class="header__img">
						<g-image :src="imageURL" />
					</div>
					<div class="header__content">
						<span>{{ story.tag_list[0] }}</span>
						<h1>{{ story.name }}</h1>
						<p>{{ story.content.summary }}</p>
					</div>
				</div>
				<div class="article__content">
					<aside>
						<ul>
							<li>
								<font-awesome :icon="['fab', 'twitter']" size="2x" />
							</li>
							<li>
								<font-awesome :icon="['fab', 'facebook-f']" size="2x" />
							</li>
							<li>
								<font-awesome :icon="['fas', 'link']" size="2x" />
							</li>
						</ul>
					</aside>
					<div>
						<RichText :text="story.content.body" />
					</div>
				</div>
			</main>
		</div>
	</Layout>
</template>

<script>
import RichText from "@/components/Richtext.vue";
import MediumCard from "@/components/MediumCard.vue";

export default {
	components: {
		RichText,
		MediumCard
	},
	name: "StoryblokEntryTemplate",
	metaInfo() {
		return {
			title: this.$page.storyblokEntry.name
		}
	},
	computed: {
		story() {
			return this.$page.storyblokEntry;
		},
		imageURL() {
			const path = this.$page.storyblokEntry.content.thumbnail;
			const directory = "storyblok_images";
			let index = path.lastIndexOf("/") + 1;
			let filename = path.substring(index);
      		return require(`!!assets-loader?width=800&quality=100&fit=inside!~/${directory}/${filename}`);
		}
	}
};
</script>

<page-query>
query StoryblokEntry ($id: ID) {
	storyblokEntry (id: $id) {
		name
    	id
    	slug
    	content
		tag_list
  	}
}
</page-query>

<style lang="scss">
.article {	
	&__header {
		display: flex;
		flex-direction: column;
		margin-top: $xxl;

		img {
			width: 100%;
		}

		.header__content {
			margin: auto 0 auto $lg;

			span {
				text-transform: uppercase;
				font-size: $font-sm;
			}

			h1 {
				font-size: $font-lg;
				font-family: "Druk Text Wide";
				margin-top: $xs;
			}

			p {
				margin-top: $lg;
				font-size: $font-md;
			}
		}
	}

	&__content {
		position: relative;
		margin: 0 auto;
		width: 90%;
		max-width: 750px;

		aside {
			position: absolute;
			left: -$lg*3;

			li {
				margin-top: $md;
			}
		}

		> div {
			margin-top: $xl;

			&::before {
				content: "";
				position: absolute;
				background-color: $accent;
				top: -$lg;
				width: 100%;
				height: 1.5px;
			}

			p {
				font-weight: 300;
				font-size: $font-sm;
			}

			p + p {
				margin-top: $md;
			}

			a {
				@include link($accent, $accent-lighter, $dark);
				font-weight: 700;
			}
		}
	}
}
</style>
