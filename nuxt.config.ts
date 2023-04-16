// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: true,
    modules: [
      '@nuxt/content',
      '@nuxtjs/color-mode',
      '@nuxtjs/tailwindcss',
      'nuxt-icons'
    ],
    content: {
      // https://content.nuxtjs.org/api/configuration
    }
})
