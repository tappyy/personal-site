// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'prismjs/themes/prism.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add a meta tag
  head.meta.push({
    name: 'charset',
    content: 'UTF-8'
  })

  // Add Google Fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700|Source+Sans+Pro:300,400,700|Roboto+Mono:500&display=swap'
  })
}
