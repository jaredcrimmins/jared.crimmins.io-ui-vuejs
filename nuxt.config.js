export default {
  server: {
    port: 8080,
    host: 'localhost'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jared Crimmins',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ]
  },

  router: {
    middleware: 'redirect'
  },

  srcDir: 'src',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
