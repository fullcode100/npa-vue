<template>
	<Layout>
		<div class="fit-content">
			<main class="article">
				<div class="article__header">
					<div class="header__img">
						<img :src="resize(story.content.thumbnail, '400x400')" :alt="story.content.alt" />
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

export default {
	components: {
		RichText,
	},
	name: "StoryblokEntryTemplate",
	computed: {
		story() {
			return this.$page.storyblokEntry;
		}
	},
  	metaInfo() {
    	return {
			title: this.$page.storyblokEntry.name,
		}
	},
	methods: {
		resize(img, option) {
			const imageService = "//img2.storyblok.com/";
			const path = img.replace("//a.storyblok.com", "");
			return imageService + option + path;
		},
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
		flex-direction: row;
		margin-top: $xl;
		margin-bottom: $lg;

		img {
			width: 400px;
		}

		.header__content {
			margin: auto 0 auto $lg;

			span {
				font-weight: 100;
				text-transform: uppercase;
				font-size: $font-md;
				color: $accent-light;
			}

			h1 {
				font-size: $font-xxl/2;
				font-family: "Druk Wide Text";
				margin-top: $sm;
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
	
		p {
			font-weight: 300;
			font-size: $font-sm;
		}

		p + p {
			margin-top: $md;
		}

		a {
			@include link($dark, $dark-lighter, $accent, $accent-lighter);
		}
	}
}
</style>
