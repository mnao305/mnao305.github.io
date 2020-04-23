import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGraduationCap, faDesktop, faCertificate, faTrophy, faBlog, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faFlickr, faInstagram, faFoursquare, faAmazon } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add([faGraduationCap, faDesktop, faCertificate, faTrophy, faBlog, faSearch, faTwitter, faGithub, faFlickr, faInstagram, faFoursquare, faAmazon])

// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
