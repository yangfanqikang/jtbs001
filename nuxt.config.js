
export default {
  mode: 'universal',
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    // base: ''
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "长沙市优丽环保科技有限公司",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: '长沙市优丽环保科技有限公司', name: '长沙市优丽环保科技有限公司', content: "长沙市优丽环保科技有限公司" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: '@/assets/css/global.scss'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
