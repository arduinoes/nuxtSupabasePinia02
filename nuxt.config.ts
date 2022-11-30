// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss'],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/supabase'
  ],
  runtimeConfig: {
    public: {
      supabase: {
        supabaseUrl: process.env.SUPABASE_URL,
        supabaseKey: process.env.SUPABASE_KEY
      }
    }
  }

})
