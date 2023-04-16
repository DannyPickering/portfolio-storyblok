export default defineNuxtConfig({
    modules: [
        ['@storyblok/nuxt', {
            accessToken: process.env.STORYBLOK_API_KEY,
            bridge: true,
            devtools: true,
            apiOptions: {
                region: 'us'
            } // storyblok-js-client options
        }]
    ],
    // devServer: {
    //     https: {
    //         key: 'localhost-key.pem',
    //         cert: 'localhost.pem'
    //     }
    // }
})