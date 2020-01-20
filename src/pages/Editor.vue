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
import config from "../../gridsome.config";
import RichText from "@/components/Richtext";
import MediumCard from "@/components/MediumCard.vue";

const loadStoryblokBridge = function(cb) {
	let sbConfigs = config.plugins.filter(item => {
		return item.use === "gridsome-source-storyblok";
	});
	let sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {};
	let script = document.createElement("script");
	script.type = "text/javascript";
	script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.client.accessToken}`;
	script.onload = cb;
	document.getElementsByTagName("head")[0].appendChild(script);
};

export default {
	components: {
		RichText,
		MediumCard
	},
	data() {
		return {
			story: {
				content: {}
			}
		};
	},
	mounted() {
		loadStoryblokBridge(() => {
			this.initStoryblokEvents();
		});
	},
	methods: {
		resize(img, option) {
			if (img != undefined || null) {
				const imageService = "//img2.storyblok.com/";
				const path = img.replace("//a.storyblok.com", "");
				return imageService + option + path;
			}
		},
		loadStory() {
			window.storyblok.get({
				slug: window.storyblok.getParam("path"),
				version: "draft"
			},
			data => {
				this.story = data.story;
			});
		},
		initStoryblokEvents() {
			this.loadStory();

			let sb = window.storyblok;

			sb.on(["change", "published"], payload => {
				this.loadStory();
			});

			sb.on("input", payload => {
				if (this.story && payload.story.id === this.story.id) {
					payload.story.content = sb.addComments(
						payload.story.content,
						payload.story.id
					);
					this.story = payload.story;
				}
			});

			sb.pingEditor(() => {
				if (sb.inEditor) {
					sb.enterEditmode();
				}
			});
		}
	}
};
</script>

<style lang="scss">
.article {	
	&__header {
		display: flex;
		flex-direction: row;
		margin-top: $xl;

		img {
			width: 400px;
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
				@include link($accent, $accent-lighter, $dark, $dark-lighter);
				font-weight: 700;
			}
		}
	}
}
</style>
