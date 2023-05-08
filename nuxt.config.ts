import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: true,
    modules: [
      '@nuxt/content',
      '@nuxtjs/color-mode',
      '@nuxtjs/tailwindcss',
      'nuxt-icon',
      'nuxt-headlessui'
    ],
    content: {
      // https://content.nuxtjs.org/api/configuration
    },
    tailwindcss: {
      // https://tailwindcss.nuxtjs.org/options
      config: {
        plugins: [
          tailwindTypography,
          tailwindForms,
        ]
      }
    },
})
