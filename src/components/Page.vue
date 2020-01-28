<template>
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
					<div>
						<RichText :text="story.content.body" />
					</div>
				</div>
			</main>
		</div>
</template>