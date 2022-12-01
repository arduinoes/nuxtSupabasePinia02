// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss'],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/supabase'
  ]
})
