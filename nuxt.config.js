
export default {
  target: 'server',

  /*
  ** Headers of the page
  */

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `%s | ${process.env.npm_package_description}`,
    title: process.env.npm_package_title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/gpf5pey.css' } // Replace this with application font
    ],
    script: [
      // { src: process.env.CHECKOUT_FRAME }
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
    // SCSS file in the project
    '~/assets/css/scss/app.scss'
  ],

  tailwindcss: {
    configPath: 'tailwind.config.js',
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components/common',
      global: true
    },
    {
      path: '~/components/layout',
      global: true
    },
    {
      path: '~/components/forms',
      global: true
    },
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    ['storyblok-nuxt', {
      accessToken: process.env.STORYBLOK_KEY,
      cacheProvider: 'memory'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/storyblok/storyblok-nuxt
    [
      // https://go.nuxtjs.dev/axios
      '@nuxtjs/axios',
    ],
  ],

  serverMiddleware: {
    '/api': '~/api'
  },
  
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:'http://localhost:3000'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
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
