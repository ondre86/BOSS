export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: false },
	modules: [
		'@nuxt/image',
		'nuxt-security',
		'@nuxt/fonts',
		'@vueuse/nuxt',
		'@nuxtjs/seo',
		'@hypernym/nuxt-gsap',
		'@nuxt/ui',
	],
	typescript: {
		typeCheck: true
	},
	ssr: true,
	css: [
		'~/assets/css/main.css'
	],
	vite: {
		css: {
			preprocessorOptions: {
				sass: {
					additionalData: `@use "@/assets/global.sass" as g`,
					api: 'modern-compiler'
				}
			}
		}
	},
	app: {
		pageTransition: { 
			name: 'fade', 
			mode: 'out-in' 
		},
		head: {
			htmlAttrs: {
				lang: 'en'
			}
		}
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
		email: {
			user: process.env.NUXT_EMAIL_USER,
			pass: process.env.NUXT_EMAIL_PASS
		}
	},
	security: {
		headers: {
			contentSecurityPolicy: {
				"script-src": ["'self'", "'nonce-{{nonce}}'", 'https://*.cloudflare.com/', 'https://*.cloudflareinsights.com/', 'https://challenges.cloudflare.com/', 'https://static.cloudflareinsights.com/'],
				"connect-src": ["'self'", 'https://*.cloudflare.com/', 'https://*.cloudflareinsights.com/', 'https://challenges.cloudflare.com/', 'https://static.cloudflareinsights.com/']
			}
		}
	}
})