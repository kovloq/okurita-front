export default {
  modules: [
  	'bootstrap-vue/nuxt','nuxt-fontawesome',"@nuxtjs/axios"
  ],
  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
  },
  fontawesome: {
  	component: 'fa'
  },
  axios: {
    // proxyHeaders: false
  },
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
}
