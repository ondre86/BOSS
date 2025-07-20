export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    modules: [
        "@nuxt/image",
        "nuxt-security",
        "@nuxt/fonts",
        "@vueuse/nuxt",
        "@nuxtjs/seo",
        "@hypernym/nuxt-gsap",
        "@nuxt/ui"
    ],
    typescript: {
        typeCheck: true
    },
    ssr: true,
    css: ["~/assets/css/main.css"],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: `@use "@/assets/global.sass" as g`,
                    api: "modern-compiler"
                }
            }
        }
    },
    app: {
        pageTransition: {
            name: "fade",
            mode: "out-in"
        },
        head: {
            htmlAttrs: {
                lang: "en"
            }
        }
    },
    schemaOrg: {
        defaults: false,
        debug: true,
        enabled: false
    },
    seo: {
        enabled: false
    },
    gsap: {
        extraPlugins: {
            scrollTrigger: true,
            text: true
        }
    },
    runtimeConfig: {
        public: {
            turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY
        },
        turnstileSecretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
        mailgunApiKey: process.env.NUXT_MAILGUN_API_KEY,
        mailgunDomain: process.env.NUXT_MAILGUN_DOMAIN,
        mailgunSender: process.env.NUXT_MAILGUN_SENDER,
        mailgunRecipient: process.env.NUXT_MAILGUN_RECIPIENT
    },
    security: {
        headers: {
            contentSecurityPolicy: {
                "script-src": [
                    "'self'",
                    "'nonce-{{nonce}}'",
                    "cloud.umami.is",
                    "api-gateway.umami.dev",
                    "https://*.cloudflare.com/",
                    "https://*.cloudflareinsights.com/",
                    "https://challenges.cloudflare.com/",
                    "https://static.cloudflareinsights.com/"
                ],
                "script-src-elem": [
                    "'self'",
                    "'unsafe-inline'",
                    "cloud.umami.is",
                    "api-gateway.umami.dev",
                    "https://*.cloudflare.com/",
                    "https://*.cloudflareinsights.com/",
                    "https://challenges.cloudflare.com/",
                    "https://static.cloudflareinsights.com/"
                ],
                "script-src-attr": [
                    "'self'",
                    "'unsafe-inline'",
                    "cloud.umami.is",
                    "api-gateway.umami.dev",
                    "https://*.cloudflare.com/",
                    "https://*.cloudflareinsights.com/",
                    "https://challenges.cloudflare.com/",
                    "https://static.cloudflareinsights.com/"
                ],
                "connect-src": [
                    "'self'",
                    "cloud.umami.is",
                    "api-gateway.umami.dev",
                    "https://*.cloudflare.com/",
                    "https://*.cloudflareinsights.com/",
                    "https://challenges.cloudflare.com/",
                    "https://static.cloudflareinsights.com/",
                    "https://api.iconify.design"
                ],
                "img-src": [
                    "'self'",
                    "data:",
                    "blob:",
                    "https://api.iconify.design"
                ]
            }
        }
    }
})
