import "~/assets/style/style.scss";

import DefaultLayout from "~/layouts/Default.vue"
import Page from "~/components/Page.vue"
import Teaser from "~/components/Teaser.vue"
import Feature from "~/components/Feature.vue"
import Grid from "~/components/Grid.vue"
import Richtext from "~/components/Richtext.vue"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faLink, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false;
library.add(faFacebookF, faTwitter, faClock, faLink, faChevronDown)

export default function (Vue, { router, head, isClient }) {
	Vue.component("Layout", DefaultLayout)
	
	Vue.component("Page", Page)
	Vue.component("Teaser", Teaser)
	Vue.component("Feature", Feature)
	Vue.component("Grid", Grid)
	Vue.component("Richtext", Richtext)

	Vue.component("font-awesome", FontAwesomeIcon)
}