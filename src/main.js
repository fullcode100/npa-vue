import "~/assets/style/style.scss";

import DefaultLayout from "~/layouts/Default.vue"
import Richtext from "~/components/Richtext.vue"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { faFacebookF, faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faLink, faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false;
library.add(faFacebookF, faTwitter, faClock, faLink, faChevronDown, faFacebookSquare, faBars)

export default function (Vue, { router, head, isClient }) {
	Vue.component("Layout", DefaultLayout)
	Vue.component("Richtext", Richtext)
	Vue.component("font-awesome", FontAwesomeIcon)
}