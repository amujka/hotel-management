// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 features: {
                    devLogs: false,
    },

 modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/icon'],

 pinia: {
                    autoImports: ['defineStore', 'storeToRefs'],
    },

 compatibilityDate: '2024-11-14',
});