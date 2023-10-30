export default {
  ssr: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  hostname: "talespinner.wieerwill.de",
  analyze: {
    analyzerMode: 'static'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Tale Spinner',
    title: 'Tale Spinner',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Tale Spinner is a collaborative storytelling game. Create exciting stories with your friends by spinning symbols that guide your narrative!'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Tale Spinner - Spin your own tale with friends!' },
      { property: 'og:description', content: 'Tale Spinner is a collaborative storytelling game. Create exciting stories with your friends by spinning symbols that guide your narrative!' },
      { property: 'og:url', content: 'https://talespinner.wieerwill.de/' },
      { property: 'og:image', content: 'https://talespinner.wieerwill.de/screenshot.png' }, // Replace with the path to your Open Graph image
      { property: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'canonical', href: 'talespinner.wieerwill.de' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  nitro: { //To have routes scanned for broken links automatically, they need to be pre-rendered by Nitro.
    static: true,
    prerender: {
      preset: 'service-worker',
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/setup',
        '/gameplay'
      ]
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
