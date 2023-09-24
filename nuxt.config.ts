// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
      ],
      // please note that this is an area that is likely to change
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  },

  // debug: true,
  components: true,
  css: [
    "~/assets/css/main.css",
    "~/assets/css/tailwind.css",
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  }
  
})
