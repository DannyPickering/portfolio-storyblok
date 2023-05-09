export default defineNuxtConfig({
  ssr: false,
  target: 'server',
  modules: [
      ['@storyblok/nuxt', {
          accessToken: process.env.STORYBLOK_API_KEY,
          bridge: true,
          devtools: true,
          apiOptions: {
              region: 'us'
          } // storyblok-js-client options
      }],
      ['@nuxtjs/google-fonts', {
        families: {
          'Open+Sans': {
            wght: [400]
          },
          'Rajdhani': {
            wght: [300, 400, 500]
          },
          'IBM+Plex+Mono': {
            wght: [400]
          }
        }
      }]
  ],
  css: [
      '@/assets/styles/main.scss',
  ],
  vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "@/assets/styles/_vars.scss" as *;'
          }
        }
      }
  },
  build: {
    transpile: ['gsap'],
  }
})