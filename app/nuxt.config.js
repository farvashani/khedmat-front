      
      import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    htmlAttrs: {
      dir: 'rtl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    /* Import Font Awesome Icons Set */
    { src: '~/node_modules/flag-icon-css/css/flag-icon.min.css' },
    /* Import Font Awesome Icons Set */
    { src: '~/node_modules/font-awesome/css/font-awesome.min.css' },
    /* Import Simple Line Icons Set */
    { src: '~/node_modules/simple-line-icons/css/simple-line-icons.css' },
    { src: 'vue-tel-input/dist/vue-tel-input.css' },
    { src: '@/assets/css/font.css'},
    { src: '@/assets/css/main.css' },
    { src: '@/assets/css/responsive.css' },

  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vueTelInput', ssr: false },
    { src: '~/plugins/vueNotification', ssr: false },
    { src: '~/plugins/vueCounter', ssr: false },
    { src: '~/plugins/vueMarque', ssr: false },
    { src: '~/plugins/vueTimer', ssr: false }

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
