export default {
  mode: 'universal',
  srcDir: 'src/',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || 'irotoridori',
    htmlAttrs: { lang: 'ja', prefix: 'og: http://ogp.me/ns#' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ivgtr.me'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'irotoridori' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://ivgtr.me' },
      { hid: 'og:title', property: 'og:title', content: 'irotoridori' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'ivgtr.me'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://lh3.googleusercontent.com/gLHukE-ObJ2hM-YMSUghThADn47rKXltREoExmIxTr7LiK2Kr-jPMOTGVcXl1oPkJLbTBChBr55z16u1AcG6OSlZtkBenh3zURNuDFJpGVkBzSGbjui_rVSfNEhPZaGBCtw3p26ptQ=w600'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['ress'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/tailwindcss', '@nuxt/typescript-build'],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    ['@nuxtjs/google-analytics', { id: 'UA-112771117-2' }]
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faTwitter', 'faGithub', 'faAmazon', 'faSteam']
      }
    ]
  },
  styleResources: {
    scss: ['~/assets/styles/functions.scss']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    analyze: true
    // extend (config, ctx) {
    // }
  },
  router: {
    base: '/'
  }
}
