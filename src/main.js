import "~/assets/style/style.scss";

import DefaultLayout from "~/layouts/Default.vue"
import Page from "~/components/Page.vue"
import Teaser from "~/components/Teaser.vue"
import Feature from "~/components/Feature.vue"
import Grid from "~/components/Grid.vue"
import Richtext from "~/components/Richtext.vue"

export default function (Vue, { router, head, isClient }) {
	Vue.component("Layout", DefaultLayout)
	
	Vue.component("Page", Page)
	Vue.component("Teaser", Teaser)
	Vue.component("Feature", Feature)
	Vue.component("Grid", Grid)
	Vue.component("Richtext", Richtext)
}
