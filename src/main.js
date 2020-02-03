import "~/assets/style/style.scss";

import DefaultLayout from "~/layouts/Default.vue"
import Richtext from "~/components/Richtext.vue"
import Event from "~/components/Event.vue"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faChevronDown, faExternalLinkSquareAlt, faCalendarAlt, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false;
library.add(faClock, faChevronDown, faFacebookSquare, faExternalLinkSquareAlt, faMapMarkerAlt, faCalendarAlt, faInstagram, faEnvelope)

export default function (Vue, { router, head, isClient }) {
	Vue.component("Layout", DefaultLayout)
	Vue.component("Richtext", Richtext)
	Vue.component("Event", Event)
	Vue.component("font-awesome", FontAwesomeIcon)

	head.htmlAttrs = {
		lang: "fr",
		prefix: "og: http://ogp.me/ns#"
	}

	head.style.push({
		name: "theme-color",
		content: "#ec0902"
	});
}